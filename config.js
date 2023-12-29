module.exports = {
  platform: "gitea",
  endpoint: "https://git.sbbh.cloud/api/v1/",
  gitAuthor: "Renovate Bot <renovate@sbbh.cloud>",
  timezone: "Australia/Melbourne",
  autodiscover: true,
  onboarding: true,
  persistRepoData: true,
  extends: [
    "local>infra/renovate:base",
    "local>infra/renovate:hostrules",
    "local>infra/renovate:packagerules",
    "local>infra/renovate:labels",
    "replacements:all",
  ],
};
