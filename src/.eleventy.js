const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const path = require('path');
const markdownIt = require("markdown-it");
const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
});

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'scripts': 'scripts',
        'styles.css': 'styles.css',
        'projects': 'projects',
        'devblogs': 'devblogs',
        'icons': 'icons',
        'imgs': 'imgs',
        'CNAME': 'CNAME'
    });

    eleventyConfig.addPassthroughCopy("CNAME");

    // image renderer with lazy loading
    md.renderer.rules.image = (tokens, idx) => {
        const token = tokens[idx];
        let src = token.attrGet("src");
        const alt = token.content || "";

        // If the image is in the project-specific folder
        if (src.startsWith('/imgs/projects/')) {
            // Ensure the path is correct in the output
            src = src.replace('/imgs/projects/', '/imgs/');
        }

        return `<img ${src}="" alt="${alt}" loading="lazy">`;
    };

    eleventyConfig.setLibrary("md", md);

    // URLs
    eleventyConfig.addFilter("absoluteUrl", (url) => {
        return new URL(url, "https://franzlor.com").href;
    });

    // DATE FILTER
    eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
    });

    // PROJECT
    eleventyConfig.addCollection("projects", function(collSectionApi) {
        const projectData = require('./_data/projects.json');
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
        const devblogData = require('./_data/devblogs.json');
        return devblogData.devblogOrder.map(slug => {
            const post = devblogData.devblogDetails[slug];
            return {
                ...post,
                // Change this to match your folder name
                url: `/devblogs/${slug}/`,  // Now using plural "devblogs"
                slug: slug,
                formattedDate: new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            };
        });
    });

    return {
        dir: {
            input: ".",
            output: "../docs",
            includes: "_includes",
            data: "_data"
        }
    }
}