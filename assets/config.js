// What changes with a release: filled in when a version is published.
// An empty value is never shown: the pages keep their fallback text ("Les fichiers arrivent bientôt").
window.SITE = {
  // The publisher, as it appears at the bottom of every page and in the legal pages.
  publisher: "Thomas Bonnefoy",

  // The address that answers users. Empty = the pages show "(à compléter)".
  supportEmail: "thomas.bonnefoy14@gmail.com",

  // The files of the current release. Both are needed: the links are
  //   <baseUrl>/LockDesk-v<version>-win-x64.zip, <baseUrl>/LockDesk-v<version>-win-arm64.zip, <baseUrl>/LockDesk-Setup-v<version>.exe
  // Example: baseUrl "https://github.com/<owner>/<repo>/releases/download/v1.8.0", version "1.8.0".
  download: {
    baseUrl: "https://github.com/ThomasBonnefoy/lockdesk.github.io/releases/download/v1.8.0",
    version: "1.8.0",
  },
};
