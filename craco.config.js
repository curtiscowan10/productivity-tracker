const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;
const DotEnv = require("dotenv");

const env = DotEnv.config({ path: "./.env" }).parsed;
const port = env.REACT_APP_DEV_SERVER_PORT || 3001;

module.exports = {
  devServer: {
    port,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "HabitTracker",
          exposes: {
            "./HabitTracker": "./src/remotes/HabitTrackerTasksRemote",
          },
          filename: "remoteEntry.js",
          shared: {
            "react-dom": {
              singleton: true,
              strictVersion: true,
              requiredVersion: deps["react-dom"],
            },
            react: {
              singleton: true,
              strictVersion: true,
              requiredVersion: deps["react"],
            },
            "@mui/icons-material": {
              singleton: true,
              strictVersion: true,
              requiredVersion: deps["@mui/icons-material"],
            },
            "@mui/material": {
              singleton: true,
              strictVersion: true,
              requiredVersion: deps["@mui/material"],
            },
            "@emotion/react": {
              singleton: true,
              strictVersion: true,
              requiredVersion: deps["@emotion/react"],
            },
            "@emotion/styled": {
              singleton: true,
              strictVersion: true,
              requiredVersion: deps["@emotion/styled"],
            },
          },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
