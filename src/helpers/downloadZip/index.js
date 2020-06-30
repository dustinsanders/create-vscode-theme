import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import createPackage from './createPackage'
import installLocal from './installLocal'

const downloadZip = async (packageSettings, theme, meta) => {
  const zip = new JSZip()

  zip.file('installLocal.js', installLocal)
  zip.file('package.json', createPackage(packageSettings))

  const themes = zip.folder('themes')
  themes.file(`${packageSettings.themeName}.json`, theme)
  themes.file(`${packageSettings.themeName}.meta.json`, meta)

  const content = await zip.generateAsync({type:"blob"})

  saveAs(content, `${packageSettings.packageName}.zip`)
}

export default downloadZip
