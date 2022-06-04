# Glentils
Server utilities by Glen Burchfield.

## Command Line Interfaces
#### Requirements
- File named with __INTERFACE_NAME__ created in `./bin` and start with:
    ```
    #!/usr/bin/env node
    require = require('esm')(module);
    require('../src/cli/index.js').[ INTERFACE_NAME ]
    ```
- Interface function defined and exported in file named `./src/cli/[ INTERFACE_NAME ].js`
- Export Interface function from `./src/cli/index.js`