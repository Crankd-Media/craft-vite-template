# CraftCMS + Vite Template

## System Requirements

- Docker
- Homebrew (OSX / Linux) or Chocolatey (Windows)
- DDEV

## Getting started

### Clone template

`npx degit crankd-media/craft-vite-template`

### Rename project

Go to the `.ddev` folder and open the `config.yaml` file. Change the `projectname` to your project name.

### Installing Dependencies

In the project directory run `ddev start` to start the container.

To install the composer dependencies run `ddev composer install`
To install npm dependencies run `ddev npm install`

## Running Vite

This project uses [Vite](https://vitejs.dev/) to build assets for production and hot module reloading (HMR) for development. When the Vite server is running Javascript, Typescript and CSS files will update in the browser on the fly using the browser's native ES Modules functionality.

To start the Vite dev server run `ddev npm run dev`

Go to (https://tradezone.crankd.local/) to see the local site.

## Development Environment

To make sure you are in development mode check that `ENVIRONMENT=dev` is set in your `.env` file.

## Production Environment

When you are ready to deploy your project run `ddev npm run build`

On your production server make sure to set `ENVIRONMENT=production` so that built assets are fetched from the `web/dist` folder and CraftCMS settings in the admin dashboard are not exposed in production.

## Project Structure

Below are some important folders to note.

- `web` - This is where your static assets are served, such as the index.html file, css files and images etc...
- `templates` - Your twig files live here
- `src` - This is where Javascript and css files can be stored. The `app.ts` file in `src/js` is where you can load css and other javascript files.
- `config` - php config files are configured here. The `vite.php` file is important for configuring the connection between vite and craft via this plugin [here](https://github.com/nystudio107/craft-vite)

Additionally the `vite.config.js` is for configuring vite itself.

_Documentation for the craft-vite plugin can be found [here](https://nystudio107.com/docs/vite/)._

## Frontend Tools & Libraries

### Vite

Vite is a bundler / build tool similar to Webpack, except that Vite uses the browser's native es module functionality to enable super fast module reloading to make the development feedback loop seamless.

## AlpineJs

Often it is useful to have a little bit of declarative reactivity available in Craft projects, even for simple _brochure_ style websites. AlpineJs adds a sprinkle of reactivity directly into html / twig templates.

### TailwindCSS

TailwindCss is a utility-first css framework. Providing a large set of utility classes that can be composed together directly on html DOM elements, making its easy to quickly prototype UI and have a consistent design system.

## Recommended Extensions

### Twig

It is recommended to use a plugin for Twig templates to assist with the process of formatting and code completion. For Visual Studio Code use this [extension](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2)

### AlpineJS Intenseness and Highlighting

- AlpineJS intellisense in vscode use [Alpine.js IntelliSense](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.alpine-js-intellisense)
- AlpineJS syntax highlighting in vscode use [Alpine.js Syntax Highlight](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.alpine-js-intellisense)
