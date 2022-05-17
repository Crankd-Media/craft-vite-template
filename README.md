# CraftCMS + Vite Template

## System Requirements
- PHP Version: ^8.0.0
- Composer
- MySQL / MariaDB

## Steps To Create Project

### Clone template  

`npx degit crankd-media/craft-vite-template`

### Generate a security key

`php craft setup/security-key`

In your terminal, go to your project’s root directory and run the following command to kick off the Setup Wizard.

`php craft setup`

Follow install process for setting up craft with a database and your web server.

Go to your local site index page eg - `https://mysite/admin/login` _replace mysite with your local domain name_

## Project Structure

Below are some important folders to note.
- `web` - This is where your static assets are served, such as the index.html file, css files and images etc...
- `templates` - Your twig files live here
- `src` - This is where Javascript and css files can be stored. The `app.ts` file in `src/js` is where you can load css and other javascript files.
- `config` - php config files are configured here. The `vite.php` file is important for configuring the connection between vite and craft via this plugin [here](https://github.com/nystudio107/craft-vite)

Additionally the `vite.config.js` is for configuring vite itself.


*Documentation for the craft-vite plugin can be found [here](https://nystudio107.com/docs/vite/).*

## MAMP Configuration
If you are using MAMP to serve your development site, make sure to setup the following...
- To enable CraftCMS backups to work in MAMP follow this [configuration]( https://craftcms.com/knowledge-base/database-backups-in-craft-3-with-mamp)
- Make sure you are running *PHP ^8.0.0*

## Frontend Tools & Libraries
### Vite
Vite is a bundler / build tool similar to Webpack, except that Vite uses the browser's native es module functionality to enable super fast module reloading to make the development feedback loop seamless.

## AlpineJs
Often it is useful to have a little bit of declarative reactivity available in Craft projects, even for simple *brochure* style websites. AlpineJs adds a sprinkle of reactivity directly into html / twig templates.

### TailwindCss
TailwindCss is a utility-first css framework. Providing a large set of utility classes that can be composed together directly on html DOM elements, making its easy to quickly prototype UI and have a consistent design system.

## Recommended Extensions
### Twig
It is recommended to use a plugin for Twig templates to assist with the process of formatting and code completion. For Visual Studio Code use this [extension](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2)

### AlpineJS Intenseness and Highlighting
- AlpineJS intellisense in vscode use [Alpine.js IntelliSense](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.alpine-js-intellisense)
- AlpineJS syntax highlighting in vscode use [Alpine.js Syntax Highlight](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.alpine-js-intellisense)
