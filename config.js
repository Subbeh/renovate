module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  platform: "gitea",
  endpoint: "https://git.sbbh.cloud/api/v1/",
  gitAuthor: "Renovate Bot <renovate@sbbh.cloud>",
  timezone: "Australia/Melbourne",
  autodiscover: false,
  onboarding: false,
  extends: [
    "local>sysadm/renovate-config:base",
    "local>sysadm/renovate-config:repositories",
  ],
  persistRepoData: true,
};
