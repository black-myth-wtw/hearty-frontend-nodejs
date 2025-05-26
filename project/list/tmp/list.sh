#!/bin/zsh
webpack --config=./project/list/component/webpack.component.js --color
webpack --config=./project/list/frontend/webpack.web.js --color
webpack --config=./project/list/backend/webpack.ssr.js --color
node ./project/list/backend/server/index.js
