import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import update from 'lodash/update'
import convert from 'color-convert'
import { getDeltaE00 } from 'delta-e'
import colorcolor from 'colorcolor'
import uniq from 'lodash/fp/uniq'

const getSeed = hex => {
  const [ L, A, B ] = convert.hex.lab.raw(hex)
  const lab = { L, A, B }

  return {
    hex,
    lab,
    hsla: colorcolor(hex, 'hsla'),
    scopes: [],
    flattenedScopes: [],
    count: 0,
  }
}

const toParsedList = tokenColors => {
  const reduction = tokenColors.reduce((acc, curr) => {
    const hex = get(curr, 'settings.foreground', '').toUpperCase()

    if (!hex.length) {
      return acc
    }

    const previous = acc[hex] || getSeed(hex)

    const scopes = [
      ...previous.scopes,
      curr.scope,
    ]
    const flattenedScopes = scopes.flat()

    if (flattenedScopes.length === 1 && flattenedScopes[0].startsWith('token.')) {
      return acc
    }

    return {
      ...acc,
      [hex]: {
        ...previous,
        scopes,
        flattenedScopes,
        count: flattenedScopes.length,
      }
    }
  }, {})

  const values = Object.values(reduction)
  const sortByCount = values.sort((a, b) => b.count - a.count)

  return sortByCount
}

const createDeltaMatrix = seed => {
  const matrix = {}

  seed.forEach(x => {
    seed.forEach(y => {
      if (x.hex !== y.hex) {
        update(matrix, [x.hex, y.hex], () => getDeltaE00(x.lab, y.lab))
      }
    })
  })

  return matrix
}

const threshold = 10
const sortByLikeColors = (seed, deltaMatrix) => {
  let allChildren = []
  const reduction = seed.reduce((acc, color, idx) => {
    if (allChildren.includes(color.hex)) {
      return acc
    }

    const sortedEntries = sortBy(
      Object.entries(deltaMatrix[color.hex]),
      ([_hex, delta]) => delta,
    )

    const likeColors = sortedEntries
      .filter(([nhex, delta]) =>
        delta <= threshold &&
        idx < seed.findIndex(entry => entry.hex === nhex) &&
        !allChildren.includes(nhex)
      )
      .map(([nhex]) => seed.find(entry => entry.hex === nhex))

    allChildren.push(...likeColors.map(entry => entry.hex))

    return [
      ...acc,
      {
        ...color,
        children: likeColors,
      },
    ]
  }, [])

  return uniq(reduction)
}

const parseTokenColors = ({ tokenColors }) => {
  const list = toParsedList(tokenColors)
  const deltaMatrix = createDeltaMatrix(list)
  const final = sortByLikeColors(list, deltaMatrix)

  console.log('final', final)
  console.log('deltaMatrix', deltaMatrix)

  return final
}

export default parseTokenColors
