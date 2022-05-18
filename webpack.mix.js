const mix = require('laravel-mix');
const { resolve } = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/index.js', 'public/js').react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.alias({
    '@components': resolve(__dirname, 'resources', 'js', 'components'),
    '@APIs': resolve(__dirname, 'resources', 'js', 'APIs'),
    '@common': resolve(__dirname, 'resources', 'js', 'common'),
    '@reducers': resolve(__dirname, 'resources', 'js', 'reducers'),
})
