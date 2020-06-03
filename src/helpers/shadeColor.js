import tinycolor from 'tinycolor2'

const shadeColor = (col, amt) => {
  const start = tinycolor(col)

  return amt > 0
    ? start.lighten(amt).toString()
    : start.darken(-amt).toString()
}

export default shadeColor
