module.exports = {
  platform: "gitea",
  endpoint: "https://git.sbbh.cloud/api/v1/",
  gitAuthor: "Renovate Bot <renovate@sbbh.cloud>",
  timezone: "Australia/Melbourne",
  autodiscover: true,
  onboarding: true,
  persistRepoData: true,
  extends: [
    "local>sysadm/renovate-config:base",
    "local>sysadm/renovate-config:hostrules",
    "local>sysadm/renovate-config:packagerules",
    "local>sysadm/renovate-config:labels",
    "replacements:all",
  ],
};
