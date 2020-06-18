import get from 'lodash/get'
import createDerivative from './createDerivative'
import isEqualColor, { findEqualColorInList } from './isEqualColor'

const getColor = (meta, key, oldValue) => {
  if (oldValue === null) {
    return null
  }

  const foundSecondary = meta.secondary.find(entry =>
    entry.colors.includes(key)
  )
  const foundSecondaryDerivative = findEqualColorInList(oldValue, get(foundSecondary, 'derivatives'))

  if (foundSecondaryDerivative) {
    return createDerivative(
      foundSecondary.newValue,
      foundSecondaryDerivative,
    )
  }

  if (foundSecondary) {
    return foundSecondary.newValue
  }

  const foundDerivativeParent = meta.colors.find(({ derivatives }) => {
    if (!derivatives) {
      return false
    }

    return findEqualColorInList(oldValue, derivatives)
  })

  if (foundDerivativeParent) {
    const derivative = findEqualColorInList(oldValue, foundDerivativeParent.derivatives)

    return createDerivative(
      foundDerivativeParent.newValue,
      derivative,
    )
  }

  const found = meta.colors.find(entry => isEqualColor(entry.value, oldValue))

  if (found) {
    return found.newValue
  }

  console.log('No Match Found for => ', [key, oldValue].join(':'))
}

const getNewColors = (meta, oldColors) => {
  const newColors = Object.entries(oldColors)
    .reduce(( acc, [key, oldValue] ) => ({
      ...acc,
      [key]: getColor(meta, key, oldValue),
    }), {})

  return newColors
}

export default getNewColors
