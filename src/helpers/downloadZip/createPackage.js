const createPackage = ({
  themeName,
  packageName,
  gitHubRepoUrl,
  publisherName,
}) => {
  const packageJson = {
    name: packageName,
    version: "1.0.0",
    scripts: {
      "install:local": "node ./installLocal.js"
    },
    keywords: [],
    author: "",
    license: "ISC",
    repository: {
      "type": "git",
      "url": gitHubRepoUrl,
    },
    publisher: publisherName,
    engines: {
      "vscode": "^1.0.0"
    },
    categories: [
      "Themes"
    ],
    contributes: {
      themes: [
        {
          label: themeName,
          uiTheme: "vs-dark",
          path: `./themes/${themeName}.json`
        }
      ]
    }
  }

  return JSON.stringify(packageJson, null, 2)
}

export default createPackage
