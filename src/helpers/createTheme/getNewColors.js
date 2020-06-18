import get from 'lodash/get'
import createDerivative from './createDerivative'
import getValue from './getValue'
import isEqualColor, { findEqualColorInList } from './isEqualColor'

const getColor = (meta, key, oldHex) => {
  if (oldHex === null) {
    return null
  }

  const foundSecondary = meta.secondary.find(entry =>
    entry.colors.includes(key)
  )
  const foundSecondaryDerivative = findEqualColorInList(oldHex, get(foundSecondary, 'derivatives'))

  if (foundSecondaryDerivative) {
    return createDerivative(
      getValue(foundSecondary),
      foundSecondaryDerivative,
    )
  }

  if (foundSecondary) {
    return getValue(foundSecondary)
  }

  const foundDerivativeParent = meta.colors.find(({ derivatives }) => {
    if (!derivatives) {
      return false
    }

    return findEqualColorInList(oldHex, derivatives)
  })

  if (foundDerivativeParent) {
    const derivative = findEqualColorInList(oldHex, foundDerivativeParent.derivatives)

    return createDerivative(
      getValue(foundDerivativeParent),
      derivative,
    )
  }

  const found = meta.colors.find(entry => isEqualColor(getValue(entry), oldHex))

  if (found) {
    return getValue(found)
  }

  console.error('No Match Found for => ', [key, oldHex].join(':'))
}

const getNewColors = (meta, oldColors) => {
  const newColors = Object.entries(oldColors)
    .reduce(( acc, [key, oldHex] ) => ({
      ...acc,
      [key]: getColor(meta, key, oldHex),
    }), {})

  return newColors
}

export default getNewColors
