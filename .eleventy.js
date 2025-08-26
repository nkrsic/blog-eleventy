module.exports = function (eleventyConfig) {
    console.log("Adding passthrough copy for assets...");
    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        }
    };
};
