# CraftCMS + Vite Template

## System Requirements
- PHP Version: ^8.0.0
- Composer
- Web server (eg. MAMP)
- MySQL / MariaDB
- NodeJS
- pnpm or npm

## Steps To Create Project

### Clone template  

`npx degit crankd-media/craft-vite-template`

### Install CraftCMS

To start run `composer install` to fetch and install all of craft's dependencies.

Create a `.env` file by running `cp .env.example .env`

Next run `php craft setup/security-key` to generate a craft security key

In your terminal, go to your project’s root directory and run the following command to kick off the Setup Wizard.

`php craft setup`

Before installing Craft setup a database and web server. A simple way to setup a web server and database is by using an application called [MAMP](https://www.mamp.info/)

*Follow install process for setting up craft with a database and your web server.*

### Frontend
All the twig templates, javascript and css files are bundled and managed using [Vite](https://vitejs.dev/)
Make sure to run `pnpm install` or `npm install` to download all the required node modules.

## Development Environment
To run build your frontend assets with hot-module reloading simply run `pnpm dev` or `npm run dev`.

To make sure you are in development mode check that `ENVIRONMENT=dev` is set in your `.env` file.

## Production Environment
When you are ready to deploy your project run `pnpm build` or `npm run build`

On your production server make sure to set `ENVIRONMENT=production` so that built assets are fetched from the `web/dist` folder.

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

