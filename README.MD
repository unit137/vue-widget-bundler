# Vue Widget Bundler
Simple project template for creating self-contained Vue widgets, that can be used in any website.

This uses [vue-custom-element](https://github.com/karol-f/vue-custom-element) and based on [vue-customelement-bundler](https://github.com/kartsims/vue-customelement-bundler), but modified for better productivity:
* added webpack-dev-server with hot reloading
* added preconfigured eslint with vue/essential and airbnb-base rulesets
* added necessary webpack-loaders for scss (with autoprefixer) and images
* included babel-polyfills (configured by targets browsers section in .babelrc) and html custom-elements polyfill
* updated all dependencies for latest versions

## Development
```
npm run dev
```
Will launch dev-server on localhost. Components needs to be registered in src/main.js. Custom element must contain a hyphen in its tag name ('vue-widget', not 'vuewidget').

## Building for production
```
npm run build
```
Result dist/*.js file name is configured in webpack-config output section.

## Usage in your website
Just include html-tag anywere on page and connect script (each custom element can be included multiple times and will be independent of each other):
```html
<vue-widget someprop="content"></vue-widget>
<script src="vue-widget.js"></script>
```
