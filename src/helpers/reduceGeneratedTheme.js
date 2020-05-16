import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import sortByFp from 'lodash/fp/sortBy'
import countBy from 'lodash/countBy'
import uniq from 'lodash/fp/uniq'
import flow from 'lodash/flow'
import map from 'lodash/fp/map'
import update from 'lodash/update'
import convert from 'color-convert'
import { getDeltaE00 } from 'delta-e'

const getSeed = theme => {
  const colorCodes = Object.values(theme.colors)
  const tokenColorCodes = theme.tokenColors.reduce((acc, curr) => {
    const foreground = get(curr, 'settings.foreground')

    if (foreground) {
      return [
        ...acc,
        foreground,
      ]
    }

    return acc
  }, [])

  const combined = [ ...colorCodes, ...tokenColorCodes ]
    .map(entry => entry.toUpperCase())

  const counted = countBy(combined)
  const seed = flow(
    uniq,
    map(hex => {
      const [ L, A, B ] = convert.hex.lab.raw(hex)
      const lab = { L, A, B }

      return {
        hex,
        lab,
        hsl: `hsl(${convert.hex.hsl(hex).join(', ')})`,
        count: counted[hex],
        colors: [],
        tokenColors: [],
      }
    }),
    sortByFp(entry => -entry.count),
  )(combined)

  return seed
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

const threshold = 20
const sortByLikeColors = (seed, deltaMatrix) => {
  const reduction = seed.reduce((acc, color, idx) => {
    const sortedEntries = sortBy(
      Object.entries(deltaMatrix[color.hex]),
      ([_hex, delta]) => delta,
    )

    const likeColors = sortedEntries
      .filter(([nhex, delta]) =>
        delta <= threshold &&
        idx < seed.findIndex(entry => entry.hex === nhex)
      )
      .map(([nhex]) => seed.find(entry => entry.hex === nhex))

    return [
      ...acc,
      color,
      ...likeColors,
    ]
  }, [])

  return uniq(reduction)
}

const reduceGeneratedTheme = theme => {
  const { colors, tokenColors } = theme
  const seed = getSeed(theme)

  Object.entries(colors).forEach(([scope, color]) =>
    seed.find(entry => entry.hex === color.toUpperCase()).colors.push(scope),
  )

  tokenColors.forEach(entry => {
    const foreground = get(entry, 'settings.foreground')

    if (foreground) {
      seed.find(entry => entry.hex === foreground.toUpperCase()).tokenColors.push(entry.scope)
    }
  })

  const deltaMatrix = createDeltaMatrix(seed)
  const final = sortByLikeColors(seed, deltaMatrix)

  return final
}

export default reduceGeneratedTheme
