const path = require('path');
const markdownIt = require("markdown-it");
const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
});


const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'scripts': 'scripts',
        'styles.css': 'styles.css',
        'projects': 'projects',
        'devblogs': 'devblogs',
        'icons': 'icons',
        'CNAME': 'CNAME'
    });

    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addPassthroughCopy('imgs');


    // image renderer with lazy loading
    md.renderer.rules.image = (tokens, idx) => {
        const token = tokens[idx];
        let src = token.attrGet("src");
        const alt = token.content || "";

        // Fix the src to ensure it's a valid path
        if (src && src.startsWith('/imgs/')) {
            return `<img src="${src}" alt="${alt}" loading="lazy">`;
        }

        return `<img src="${src}" alt="${alt}" loading="lazy">`;
    };


    eleventyConfig.setLibrary("md", md);

    // URLs
    eleventyConfig.addFilter("absoluteUrl", (url) => {
        return new URL(url, "https://franzlor.com").href;
    });

    // DATE FILTER
    eleventyConfig.addFilter("date", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    // PROJECT
    eleventyConfig.addCollection("projects", function(collSectionApi) {
        const projectData = require('./src/_data/projects.json');
        return projectData.projectOrder.map(slug => {
            const project = projectData.projectDetails[slug];
            return {
                ...project,
                url: `/projects/${slug}/`,
                slug: slug
            };
        });
    });

    // DEVBLOGS
    eleventyConfig.addCollection("devblog", function(collectionApi) {
        const devblogData = require('./src/_data/devblogs.json');
        return devblogData.devblogOrder.map(slug => {
            const post = devblogData.devblogDetails[slug];
            return {
                ...post,
                url: `/devblogs/${slug}/`,
                slug: slug,
                // Don't preformat date here anymore
                date: new Date(post.date)
            };
        });
    });

    return {
        dir: {
            input: "src",
            output: "docs",
            includes: "_includes",
            data: "_data"
        }
    }
}