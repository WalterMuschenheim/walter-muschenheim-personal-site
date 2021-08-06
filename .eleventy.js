module.exports = function (config) {
  config.addPassthroughCopy("src/assets/");
  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
