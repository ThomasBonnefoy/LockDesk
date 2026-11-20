# Site de LockDesk (version bêta)

Site statique (HTML, CSS, un peu de JavaScript, sans framework ni étape de construction) qui présente LockDesk et propose le téléchargement de la bêta. Il ne dépose aucun cookie, ne mesure pas l'audience et ne charge rien d'ailleurs.

Cette version ne parle ni de compte, ni d'essai, ni de prix : la v1.8.0 n'a aucun compte et ne se connecte à rien. Le site complet avec abonnement (essai, page de paiement Paddle, conditions de vente, remboursement) reste dans le dépôt privé, branche `feat/subscription`, dossier `site/`.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : fonctionnalités, captures, sécurité de la restauration, étapes, questions. |
| `telecharger.html` | Les trois fichiers (installateur, zip x64, zip ARM64), installation, SmartScreen, désinstallation. |
| `aide.html` | Questions fréquentes et contact. |
| `legal/` | Mentions légales et confidentialité. |
| `404.html` | Page pour une adresse inconnue (utilise `<base href="/lockdesk.github.io/">`, voir plus bas). |
| `assets/config.js` | Les réglages : éditeur, adresse de contact, version et adresse des fichiers à télécharger. |

## À remplir avant de partager

1. **`assets/config.js`** : `supportEmail` (sinon les pages affichent « à compléter » en jaune), puis `download.baseUrl` et `download.version` une fois les fichiers publiés. Tant qu'ils sont vides, les boutons restent grisés (« Les fichiers arrivent bientôt »).
2. **Captures d'écran** (`assets/images/`) : elles datent de la v1.0 et montrent l'ancien nom. À refaire avec `bin/readme-shots.ps1` du dépôt privé.
3. **Pages légales** : relire. Le nom de l'éditeur est celui de `config.js` ; l'adresse postale n'est pas indiquée.

## Mise en ligne (GitHub Pages)

Dépôt `ThomasBonnefoy/lockdesk.github.io`, publié depuis la branche `main`, dossier racine. Comme le dépôt n'appartient pas à un compte nommé `lockdesk`, l'adresse est un site de projet : `https://thomasbonnefoy.github.io/lockdesk.github.io/`. Tous les liens sont relatifs, sauf `404.html` (balise `<base>`) et les adresses `canonical`, `og:` et `sitemap.xml`. Avec un nom de domaine à soi, retirer la balise `<base>` et remplacer `https://thomasbonnefoy.github.io/lockdesk.github.io/` partout.

## Fichiers à télécharger

Ils ne sont pas dans ce dépôt (GitHub refuse les fichiers de plus de 100 Mo, et l'installateur en fait 134) : ce sont les fichiers joints à une release de ce dépôt public, sans le code de l'application. Noms attendus : `LockDesk-vX.Y.Z-win-x64.zip`, `LockDesk-vX.Y.Z-win-arm64.zip`, `LockDesk-Setup-vX.Y.Z.exe`.
