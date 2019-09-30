const path = require("path");
const SRC = "src";

/**
 * Convert Windows backslash paths to slash paths
 * @param {string} input
 * @returns {string}
 */
function slash(input) {
    const isExtendedLengthPath = /^\\\\\?\\/.test(input);
    const hasNonAscii = /[^\u0000-\u0080]+/.test(input); // eslint-disable-line no-control-regex

    if (isExtendedLengthPath || hasNonAscii) {
        return input;
    }

    return input.replace(/\\/g, "/");
}

module.exports = function(source) {
    const data = source.basicData;
    const currentFolder = slash(path.relative(SRC, path.relative(data.rootPath, data.dirPath)));
    return {
        templates: [
            {
                // 当在 pages 目录下新建一个文件夹时，向这个文件夹内注入 .dtpl/page 下的文件
                matches: function() {
                    return source.isDirectory && currentFolder.startsWith("page");
                },
                name: "./page/",
                inject: function() {
                    const rawModuleName = data.rawModuleName;
                    const page = [currentFolder, rawModuleName, rawModuleName].join("/");
                    // 向 app.json 中注入内容
                    const appJson = path.resolve(data.rootPath, SRC, "app.jsonc");
                    const projectJson = path.resolve(data.rootPath, SRC, "project.config.jsonc");
                    return [
                        {
                            file: appJson,
                            data: { page: '"' + page + '",' },
                            tags: "loose",
                            append: true,
                            eol: require("os").EOL,
                        },
                        {
                            file: projectJson,
                            data: {
                                page: `{
    "id": ${Math.round((Date.now() % 100000000000) / 1000)},
    "name": "${rawModuleName}",
    "pathName": "${page}",
    "query": "",
    "scene": null,
},`,
                            },
                            tags: "loose",
                            append: true,
                            eol: require("os").EOL,
                        },
                    ];
                },
            },
            {
                // 当在 components 目录下新建一个文件夹时，向这个文件夹内注入 .dtpl/component 下的文件
                matches: function() {
                    return (
                        source.isDirectory &&
                        (currentFolder.toLowerCase() === "component" ||
                            currentFolder.toLowerCase() === "components")
                    );
                },
                name: "./component/",
            },
            {
                name: "./wxts.dtpl", // wxts模板
                matches: "src/**/*.wxts",
            },
        ],
        globalData: {
            dollar: "$",
            style: "scss",
            folder: currentFolder,
        },
    };
};
