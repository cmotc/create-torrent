(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "create-torrent",
  "description": "Create .torrent files",
  "version": "3.24.8",
  "author": "Feross Aboukhadijeh <feross@feross.org> (http://feross.org/)",
  "bin": {
    "create-torrent": "./bin/cmd.js"
  },
  "bugs": {
    "url": "https://github.com/feross/create-torrent/issues"
  },
  "dependencies": {
    "bencode": "^0.10.0",
    "block-stream2": "^1.0.0",
    "filestream": "^4.0.0",
    "flatten": "^1.0.2",
    "is-file": "^1.0.0",
    "junk": "^1.0.1",
    "minimist": "^1.1.0",
    "multistream": "^2.0.2",
    "once": "^1.3.0",
    "piece-length": "^0.0.0",
    "readable-stream": "^2.0.5",
    "run-parallel": "^1.0.0",
    "simple-sha1": "^2.0.0",
    "xtend": "^4.0.1"
  },
  "devDependencies": {
    "brfs": "^1.1.2",
    "parse-torrent": "^5.0.0",
    "standard": "*",
    "tape": "^4.0.0",
    "webtorrent-fixtures": "^1.4.0",
    "zuul": "^3.0.0"
  },
  "homepage": "https://github.com/feross/create-torrent",
  "keywords": [
    "torrent",
    "create torrent",
    "make",
    "torrent file",
    "torrent files",
    ".torrent",
    "create",
    "peer-to-peer",
    "bittorrent",
    "new",
    "webtorrent"
  ],
  "license": "MIT",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git://github.com/feross/create-torrent.git"
  },
  "scripts": {
    "test": "standard && npm run test-node && npm run test-browser",
    "test-browser": "zuul -- test/browser/*.js",
    "test-browser-local": "zuul --local -- test/browser/*.js",
    "test-node": "tape test/*.js"
  },
  "standard": {
    "globals": [
      "Blob",
      "FileList"
    ]
  },
  "browserify": {
    "transform": ["brfs"]
  }
}

},{}]},{},[1]);
