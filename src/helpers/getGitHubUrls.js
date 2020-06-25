const githHubBase = 'https://github.com/'
const rawGitHubBase = 'https://raw.githubusercontent.com'

const getGitHubUrls = ({ gitHubRepo, path }) => ({
  repo: `${githHubBase}/${gitHubRepo}`,
  theme: `${rawGitHubBase}/${gitHubRepo}/master/${path}`,
  meta: `${rawGitHubBase}/${gitHubRepo}/master/${path.replace('.json', '.meta.json')}`,
})

export default getGitHubUrls
