import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'
import sortByFp from 'lodash/fp/sortBy'
import countBy from 'lodash/countBy'
import uniq from 'lodash/fp/uniq'
import flow from 'lodash/flow'
import map from 'lodash/fp/map'
import update from 'lodash/update'
import convert from 'color-convert'
import { getDeltaE00 } from 'delta-e'
import colorcolor from 'colorcolor'

const getSeed = hex => {
  // const [ L, A, B ] = convert.hex.lab.raw(hex)
  // const lab = { L, A, B }

  return {
    hex,
    // lab,
    hsla: colorcolor(hex, 'hsla'),
    // scopes: [],
    // flattenedScopes: [],
    keys: [],
  }
}

const toParsedList = colors => {
  const reduction = Object.entries(colors)
    .reduce((acc, [key, value]) => {
      const hex = value.toUpperCase()
      const previous = acc[hex] || getSeed(hex)

      return {
        ...acc,
        [hex]: {
          ...previous,
          keys: [
            ...previous.keys,
            key,
          ]
        },
      }
    }, {})

  const list = Object.values(reduction)
    .map(entry => ({
      ...entry,
      count: entry.keys.length,
    }))
    .sort((a, b) => b.count - a.count)

  return list
}

const reduceGeneratedTheme = ({ colors }) => {
  const list = toParsedList(colors)

  return list.map(entry => ({
    ...entry,
    children: [],
  }))
}

export default reduceGeneratedTheme
