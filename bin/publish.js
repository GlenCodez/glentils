#!/usr/bin/env node

require = require('esm')(module);
require('../src/cli/index.js').Publish(...process.argv);