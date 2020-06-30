const vsix = "`${name}-${version}.vsix`" // eslint-disable-line no-template-curly-in-string
const codeCommand = "`code --install-extension ${vsix}`" // eslint-disable-line no-template-curly-in-string

const installLocal =
`const { execSync } = require('child_process')
const { name, version } = require('./package.json')

const vsix = ${vsix}

const commands = [
  'vsce package',
  ${codeCommand},
]

commands.map(
  command => execSync(command, { stdio: 'inherit' }),
)`


export default installLocal
