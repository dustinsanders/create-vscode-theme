import createDerivative from '../helpers/createTheme/createDerivative'

const removeNewValue = list =>
  list.map(({ newValue, ...rest }) => {
    const base = {
      ...rest,
      value: newValue,
    }

    if (base.derivatives) {
      const derivatives = base.derivatives.map(entry => ({
        ...entry,
        value: createDerivative(base.value, entry),
      }))

      return {
        ...base,
        derivatives,
      }
    }

    return base
  })

const createMeta = ({ primary, secondary }) => {
  const newPrimary = removeNewValue(primary)
  const newSecondary = removeNewValue(secondary)
  const newMeta = {
    primary: newPrimary,
    secondary: newSecondary,
  }

  return JSON.stringify(newMeta, null, 2)
}

export default createMeta
