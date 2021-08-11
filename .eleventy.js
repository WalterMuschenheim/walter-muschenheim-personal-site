module.exports = function (config) {
  config.addFilter("camelToSpace", function (value) {
    const text = value;
    const result = text.replace(/([A-Z])/g, " $1");
    // const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    const finalResult = result.toLowerCase();
    return finalResult;
  });
  config.addPairedShortcode("grid", function (content) {
    return `<div class='section-container'>${content}</div>`;
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
