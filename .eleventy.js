const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Pass static assets through unchanged
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Markdown filter – used to render CMS rich-text fields stored as markdown in JSON
  const md = markdownIt({ html: true });
  eleventyConfig.addFilter("markdown", (content) =>
    content ? md.render(content) : ""
  );

  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", (str, len = 160) => {
    if (!str || str.length <= len) return str || "";
    return str.slice(0, len).trim() + "…";
  });

  // ── Collections ──────────────────────────────────────────────────────────
  // Books – sorted by `order` front-matter field
  eleventyConfig.addCollection("books", (api) =>
    api.getFilteredByGlob("src/books/*.md").sort(
      (a, b) => (a.data.order || 99) - (b.data.order || 99)
    )
  );

  eleventyConfig.addCollection("characters", (api) =>
    api.getFilteredByGlob("src/characters/*.md")
  );

  eleventyConfig.addCollection("creatures", (api) =>
    api.getFilteredByGlob("src/creatures/*.md")
  );

  eleventyConfig.addCollection("realms", (api) =>
    api.getFilteredByGlob("src/realms/*.md").sort(
      (a, b) => (a.data.order || 99) - (b.data.order || 99)
    )
  );

  // Blog posts – newest first
  eleventyConfig.addCollection("blog", (api) =>
    api.getFilteredByGlob("src/blog/*.md").reverse()
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
