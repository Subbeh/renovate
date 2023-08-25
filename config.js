module.exports = {
  platform: "gitea",
  endpoint: "https://git.sbbh.cloud/api/v1/",
  gitAuthor: "Renovate Bot <renovate@sbbh.cloud>",
  timezone: "Australia/Melbourne",
  autodiscover: true,
  onboarding: true,
  persistRepoData: true,
  extends: [
    "local>infra/renovate-config:base",
    "local>infra/renovate-config:hostrules",
    "local>infra/renovate-config:packagerules",
    "local>infra/renovate-config:labels",
    "replacements:all",
  ],
};
