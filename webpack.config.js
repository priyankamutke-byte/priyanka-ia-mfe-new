const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "abc",
    projectName: "IntelligentAsset",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,

    // ✅ IMPORTANT: Add correct entry!
    entry: path.resolve(__dirname, "src/abc-IntelligentAsset.tsx"),
  });

  return merge(defaultConfig, {
    output: {
      filename: "abc-IntelligentAsset.js",  // ✅ Final bundle name
      libraryTarget: "system",
    },

    // Avoid bundling react inside your MFE
    externals: ["react", "react-dom", "@clearblade/ia-mfe-react", "@clearblade/ia-mfe-core"],
  });
};
