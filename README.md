# CraftCMS + Vite Template

## Steps To Create Project

### Clone template

`npx degit crankd-media/craft-vite-template`

### Generate a security key

`php craft setup/security-key`

In your terminal, go to your project’s root directory and run the following command to kick off the Setup Wizard.

`php craft setup`
Follow install process for setting up craft with a database and your web server.

Go to your local site index page eg - `https://mysite/admin/login` _replace mysite with your local domain name_

# Project Structure

Below are some important folders to note.

- `web` - This is where your static assets are served, such as the index.html file, css files and images etc...

- `templates` - Your twig files live here
- `src` - This is where Javascript and css files can be stored. The `app.ts` file in `src/js` is where you can load css and other javascript files.
- `config` - php config files are configured here. The `vite.php` file is important for configuring the connection between vite and craft via this plugin [here](https://github.com/nystudio107/craft-vite).

Additionally the `vite.config.js` is for configuring vite itself.

Documentation for the craft-vite plugin can be found [here](https://nystudio107.com/docs/vite/).
