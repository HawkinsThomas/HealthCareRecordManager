const path = require("path");
const getFilesFromDir = require("./config/files");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PAGE_DIR = path.join("src", "pages", path.sep);
const jsFiles = getFilesFromDir(PAGE_DIR, [".js"]);
const htmlFiles = getFilesFromDir(PAGE_DIR, [".html"]);

// create an object containing the entery points for each page's .js file
const entry = jsFiles.reduce((obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {});

// create an object containing a new HtmlWebPackPlugin Object for each .html file
const htmlPlugins = htmlFiles.map((filePath) => {
  const fileName = filePath.replace(PAGE_DIR, "");
  return new HtmlWebPackPlugin({
    chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
    template: filePath,
    filename: fileName});
});

module.exports = {
  entry: entry,
  plugins: [...htmlPlugins],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src", "components")
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader:"babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
        },
      },
    }],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
};