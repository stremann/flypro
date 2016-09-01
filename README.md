Flypro
======
Easy Flux implementation for JavaScript apps.  
It helps you write applications that behave consistently and are easy to test.  
You can use Redux together with [React](https://facebook.github.io/react/), or with any other view library.  

[![build status](https://travis-ci.org/stremann/flypro.svg?branch=master)](https://travis-ci.org/stremann/flypro)
[![coverage status](https://coveralls.io/repos/github/stremann/flypro/badge.svg?branch=master)](https://coveralls.io/github/stremann/flypro?branch=master)
[![npm version](https://img.shields.io/npm/v/flypro.svg)](https://www.npmjs.com/package/flypro)
[![npm downloads](https://img.shields.io/npm/dm/flypro.svg?style=flat-square)](https://www.npmjs.com/package/flypro)

### Influences

Flypro evolves the ideas of [Flux](http://facebook.github.io/flux/), but avoids its complexity by taking cues from [Redux](https://github.com/reactjs/redux/).  
Whether you have used them or not, Flypro only takes a few minutes to get started with.

### Installation

To install the stable version:

```
npm install --save flypro
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.  
If you don't, you can [access these files on unpkg](https://unpkg.com/flypro/), download them, or point your package manager to them.

Most commonly people consume Flypro as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules. These modules are what you get when you import `flypro` in a [Webpack](http://webpack.github.io), [Browserify](http://browserify.org/), or a Node environment.

If you don't use a module bundler, it's also fine. The `flypro` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/flypro/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/flypro/dist/flypro.js) on the page. The UMD builds make Flypro available as a `window.Flypro` global variable.

The Flypro source code is written in ES2015 but it is precompiled both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5). You don't need to use Babel or a module bundler to [get started with Flypro](https://github.com/stremann/flypro/blob/master/examples/counter/pure%20%2B%20flypro/index.html).

#### Complementary Packages

Most likely, you'll also need [the React bindings](https://github.com/stremann/react-flypro).

```
npm install --save react-flypro
```

Note that unlike Flypro itself, packages in the Flypro ecosystem don't provide UMD builds, so it is recommended using CommonJS module bundlers like [Webpack](http://webpack.github.io) and [Browserify](http://browserify.org/) for the most comfortable development experience.

### Examples

* Counter Vanilla ([source](https://github.com/stremann/flypro/tree/master/examples/counter/pure%20%2B%20flypro))
* Counter + Flypro ([source](https://github.com/stremann/flypro/tree/master/examples/counter/react%20%2B%20flypro))
* Counter + Flypro + React Flypro ([source](https://github.com/stremann/flypro/tree/master/examples/counter/react%20%2B%20flypro%20%2B%20react-flypro))

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the GitHub [Releases](https://github.com/stremann/flypro/releases) page.

### License

MIT