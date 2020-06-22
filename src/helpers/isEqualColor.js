import tinycolor from 'tinycolor2'

const isEqualColor = (color1, color2) =>
  tinycolor(color1).toHex8String() === tinycolor(color2).toHex8String()

export const findEqualColorInList = (color, list = []) => {
  const found = list.find(entry =>  isEqualColor(color, entry.value))

  return found
}

export default isEqualColor
