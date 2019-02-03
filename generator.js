module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      "nw": "^0.35.4-sdk",
      "nwjs-builder-phoenix": "^1.15.0",
    },
  });
};