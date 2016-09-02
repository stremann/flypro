Flypro
======
Easy Flux implementation for JavaScript apps.  
Write easy to test apps that behave consistently.  
Use Flypro with [React](https://facebook.github.io/react/), or with any other view library.  

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

Most commonly people consume Flypro as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules. 
These modules are what you get when you import `flypro` in a [Webpack](http://webpack.github.io), [Browserify](http://browserify.org/), or a Node environment.

If you don't use a module bundler, it's also fine. 
The `flypro` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/flypro/dist/). 
They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. 
For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/flypro/dist/flypro.js) on the page. 
The UMD builds make Flypro available as a `window.Flypro` global variable.

The Flypro source code is written in ES2015 but it is precompiled both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5). 
You don't need to use Babel or a module bundler to [get started with Flypro](https://github.com/stremann/flypro/blob/master/examples/counter/pure%20%2B%20flypro/index.html).

#### Complementary Packages

Most likely, you'll also need [the React bindings](https://github.com/stremann/react-flypro).

```
npm install --save react-flypro
```

Note that unlike Flypro itself, packages in the Flypro ecosystem don't provide UMD builds, so it is recommended using CommonJS module bundlers like [Webpack](http://webpack.github.io) and [Browserify](http://browserify.org/) for the most comfortable development experience.

### API

#### `createStore(handler, [initialState])`

Creates a Flypro store that holds the complete state tree of your app. There should only be a single store in your app.

##### Arguments

1. `handler`: a function that returns the next state tree, given the current state tree and command to handle.

2. [`initialState`]: the initial state, the shape of the state could be a primitive, an array, an object. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session.

##### Returns

- `store`: an object with a few methods on it that holds the complete state of your app. The only way to change the state inside it is to send a command on it.

#### Store Methods

- `getState()`: returns the current state tree of your application.
- `send(command)`: sends a command. This is the only way to do a state change. `command` is a plain object describing the change that makes sense for your application. Commands are the only way to get data into the store. Check out [Flux Standard](https://github.com/acdlite/flux-standard-action) for recommendations on how commands could be constructed.  
- `subscribe(listener)`: adds a change listener. It will be called any time a command is sent, and some part of the state tree may potentially have changed. It is a low-level API. Most likely, instead of using it directly, you'll use React (e.g. React Flypro or other) bindings.  To unsubscribe the change listener, invoke the function returned by `subscribe`. `listener` callback is a function will be invoked any time a command has been sent, and the state tree might have changed.
- `getListeners()`: returns the current array of liteners subscribed to the store of your application.

### Gist

The whole state of your app is stored in an object tree inside a single *store*.  
The only way to change the state tree is to send a *command*, an object describing what happened.  
To specify how the commands transform the state tree, you write pure *handlers*.

That's it!

```js
import createStore from 'flypro';

// This is a handler, pure function with (state, command) => state signature.
// It describes how command transforms the state into the next state.
function counter(state = 0, command) {
    switch (command.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Create a Flypro store holding the state of your app.
let store = createStore(counter);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Flypro) rather than subscribe() directly.
store.subscribe(() => console.log(store.getState()));

// The only way to change the internal state is to send an command.
store.send({ type: 'INCREMENT' }); // 1
store.send({ type: 'INCREMENT' }); // 2
store.send({ type: 'DECREMENT' }); // 1
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called *commands*. 
Then you write a special function called *handler* to decide how every command transforms the entire application's state.

If you're coming from Flux, there is a single important difference you need to understand. 
Flypro doesn't have a Dispatcher or support many stores. Instead, there is just a single store with a single root handler function. 
As your app grows, instead of adding stores, you split the root handler into smaller handlers independently operating on the different parts of the state tree. 
This is exactly like there is just one root component in a React app, but it is composed out of many small components.

### Examples

* Counter Vanilla ([source](https://github.com/stremann/flypro/tree/master/examples/counter/pure%2Bflypro))
* Counter + Flypro ([source](https://github.com/stremann/flypro/tree/master/examples/counter/react%2Bflypro))
* Counter + Flypro + React Flypro ([source](https://github.com/stremann/flypro/tree/master/examples/counter/react%2Bflypro%2Breact-flypro))

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the GitHub [Releases](https://github.com/stremann/flypro/releases) page.

### License

MIT