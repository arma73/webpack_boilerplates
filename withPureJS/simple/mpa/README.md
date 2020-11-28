<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Simple_MPA</h1>
</div>

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/arma73/webpack-templates webpack-templates

# Go to the app:
cd webpack-templates

# Install dependencies:
npm install
yarn

# Server with hot reload at http://localhost:8081/
npm run dev
yarn dev

# Output will be at dist/ folder
npm run build
yarn build
```

## Project Structure:

* `assets/` - folder with extra static assets that will be copied into output folder
* `src/html/*` - html files
* `src/css/*` - css files
* `src/scss/*` - scss files
* `src/js/*` - js files

<div align="center">
  <h2>Settings:</h2>
</div>

## Main const:
Easy way to move all files.
Default:
``` js
const paths = {
    ROOT_DIR, // Root directory.
    CONFIG_PATH: path.resolve(__dirname, ".."), // Configuration file directory.
    SRC_PATH: path.resolve(ROOT_DIR, "src"), // Source file directory.
    BUILD_PATH: path.resolve(ROOT_DIR, "dist"), // Build directory.
    PUBLIC_PATH: "assets", // Static file storage directory.
    MARKUP_PATH: path.resolve(ROOT_DIR, "src", "html"), // Markup directory.
    NODE_MODULES_PATH: path.resolve(ROOT_DIR, "node_modules"), // node_modules directory.
    ignorePages: ["test"] // Without entry files.
}; 
```

## Import js files:
1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file
``` js
// another js file for example
import './common.js'
```

**Usage:**
All files must be created in the `./src/html` folder.
Example:
``` bash
./src/html/index.html
./src/html/about.html
```

## License
[MIT](./LICENSE)

Copyright (c) 2020, [Arman Khilko](https://github.com/arma73)