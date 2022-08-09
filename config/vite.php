<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev',
    'devServerPublic' => Craft::getAlias('@web') . ':3000',
    'serverPublic' => Craft::getAlias('@web') . '/dist/',
    'manifestPath' => Craft::getAlias('@web') . '/dist/manifest.json',
    'errorEntry' => 'src/app.ts',
    'devServerInternal' => 'http://localhost:3000/',
    'checkDevServer' => true,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' => '_critical.min.css',
];