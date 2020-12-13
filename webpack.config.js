const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/assets/js/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      name: "AllLine Budget Tracker App",
      short_name: "AllLine BT App",
      description: "An application for Tracking your Budget OffLine - OnLine - ALLLine",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/assets/icons/icon-192x192.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // files must end in ".js" to be transpiled
        exclude: /node_modules/, // don't transpile code from "node_modules"
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;