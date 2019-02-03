module.exports = (api, options) => {
  api.extendPackage({
    devDependencies: {
      "nw": "^0.35.4-sdk",
      "nwjs-builder-phoenix": "^1.15.0",
    },
    scripts: {
      "nw-serve": "vue-cli-service serve & sleep 5 && nw ."
    }
  });
};