#!/bin/bash
yarn build:commonjs
yarn build:esm
yarn copy-css:lib
yarn copy-css:esm