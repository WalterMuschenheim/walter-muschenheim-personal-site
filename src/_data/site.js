"use strict";

const bio = require("./bio");

module.exports = {
  author: bio.name,
  title: bio.name,
  copyrightYear: new Date().getFullYear(),
};
