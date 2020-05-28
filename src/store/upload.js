import { action } from 'easy-peasy'
import payload from './data/darkPlus'
import colorcolor from 'colorcolor'
import parse from 'color-parse'
import get from 'lodash/get'

const getHueFromHsla = hsla => {
  const parsed = parse(hsla)

  return get(parsed, 'values[0]')
}

const getHueDifference = (oldHsla, newHsla) => {
  const [ oldHue, newHue ] = [oldHsla, newHsla].map(getHueFromHsla)

  return oldHue - newHue
}


const getNewHue = (hue, hueDifference) => {
  const newHue = hue - hueDifference

  if (newHue < 0) {
    return 360 + newHue
  }

  return newHue
}

const getNewChildHexCodeEntries = (children, hueDifference) =>
  children.map(color => {
    const hue = getHueFromHsla(color.hsla)
    const newHue = getNewHue(hue, hueDifference)
    const [
      _h,
      s,
      l,
      a,
    ] = color.hsla.split(',')
    const newHsla = `hsla(${newHue},${s},${l},${a})`
    const newHex = colorcolor(newHsla, 'hex').toUpperCase()

    return [color.hex, newHex]
  })


// https://www.schemecolor.com/homer-the-simpsons-cartoon-colors.php
const homer = {
  '#4FB4D8': '#FED90F', //yellow -> old hope blue

  '#EB3D54': '#E45DA2', // beige - beard -> old hope red

  '#E5CD52': '#70D1FE', // light blue - pants -> old hope yellow
  '#E5CD52': '#2579c5', // light blue - pants -> old hope yellow


  '#78BD65': '#d4e59c', // green blue - shoes -> old hope green


  // '#EF7C2A': '#E45DA2', // pink - donut -> old hope orange
  '#EF7C2A': '#ed6128', // pink - donut -> old hope orange

  '#1C1D21': '#252526', //   -> background
  // '#CBCDD2': '#1C1D21', //foreground
}

const upload = {
  type: 'generated',
  payload,
  replacements: {},
  setReplacement: action((state, { color, newColor }) => {
    const newHsla = colorcolor(newColor.hex, 'hsla')
    const hueDifference = getHueDifference(color.hsla, newHsla)

    state.replacements[color.hex] = newColor.hex

    const entries = getNewChildHexCodeEntries(color.children, hueDifference)
    entries.forEach(([oldHex, newHex]) =>
      state.replacements[oldHex] = newHex
    )
  })
}

export default upload
