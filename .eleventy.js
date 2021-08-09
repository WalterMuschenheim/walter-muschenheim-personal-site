module.exports = function (config) {
  config.addPairedShortcode("grid", function (content) {
    return `<div class='section-container>${content}</div`;
  });
  config.addPassthroughCopy("src/assets/");
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
