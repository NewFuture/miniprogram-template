#!/usr/bin/env node

/**
 * npm i 之后执行内容
 * * 清理无用types
 */

/* eslint-disable no-undef,@typescript-eslint/no-var-requires,no-console */
const rm = require("rimraf");
const pkg = require("./package.json");

/**
 * @type string[]
 */
const dev = Object.keys(pkg.devDependencies) || [];
/**
 * 删除多余的`@types`文件
 */
rm(
    "node_modules/@types/**/*",
    {
        glob: {
            ignore: dev.map((s) => `node_modules/${s}/**`),
        },
    },
    (err) => {
        if (err) {
            console.err(err);
            console.err("× @types 删除失败!");
        } else {
            console.log("√ @types 清理完成.");
        }
    },
);
