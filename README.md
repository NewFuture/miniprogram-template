# miniporgram-template

小程序模板项目(with VS code)
[![Travis Build Status](https://travis-ci.com/NewFuture/miniprogram-template.svg?branch=master)](https://travis-ci.com/NewFuture/miniprogram-template)
[![Build Status](https://dev.azure.com/NewFuture-CI/CI/_apis/build/status/NewFuture.miniprogram-template?branchName=master)](https://dev.azure.com/NewFuture-CI/CI/_build/latest?definitionId=1&branchName=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/NewFuture/miniprogram-template.svg)](https://greenkeeper.io/)

使用 [miniprogram-build](https://github.com/NewFuture/miniprogram-build) 工具构建

## Required <所需环境>

-   `npm`(版本 > 6.0)或者`yarn`
-   `VSCode` 编辑器
-   小程序开发工具

## quick start <使用>

1. create project <新建模板项目>

```
npm create miniprogram NewFuture/miniprogram-template [本地目录]
```

不指定`本地目录`则在当前目录创建

2. start <在项目文件下运行>

```
npm start
```

3. 调试工具打开`dist`目录即可预览

### script <命令>

-   `npm start`: 重新编译项目并实时更新[alias `npm run start`]
-   `npm test`: 测试[alias `npm run test`]
-   `npm run clean`: 清理 dist 目录
-   `npm run build`: 重新编译打包(支持三个环境)
-   `npm run watch`: 仅监测文件变化实时更新(支持三个环境)
-   `npm run release`: 发布前优化编译打包(支持三个环境)
-   `npm run lint`: 代码风格和格式检查(支持不同语言单独检查)
-   `npm run fix`: 自动修复可修复的 lint 和代码风格问题

全部快捷命令[package.json](https://github.com/NewFuture/miniprogram-template/blob/master/package.json#L6-L38)

## Coding <编码>

### language <语言>

#### js

-   `.ts`(TypeScript) 或 `.js`(JavaScript) (推荐`ts`)
-   Eslint + Prettier 检查代码风格和自动格式化
-   TS 支持`/`绝对路径 import

#### wxml

-   `.wxml` 或 `.html`
-   Htmlhit + Prettier 检查代码风格和自动格式化

#### wxss

-   `.scss` ,`.sass`或者`.css` (推荐`scss`)
-   Stylelint + Prettier 检查代码风格和自动格式化
-   `scss` 可以直接 `@import` assets 目录下内容

#### json

-   `.jsonc`,`.json`或`.json5` 支持注释
-   Prettier 代码检查和自动格式化

#### wxs

-   `.wxts`(TypeScript),`.wxs`(JavaScript) (推荐`wxts`)
-   Prettier 代码检查和自动格式化

### Editor <编辑器>

推荐使用`VSCode`

1. 首次使用根据提示**自动安装推荐插件**
2. 所有插件已配置好,会自动进行代码检查提示,保存时自动修复
3. 新建 `Page`,`Component`,`wxs`会自动生产模板文件([可修改模板](.dtpl/))

## CI 集成

默认已经配置完 Auzre 和 Travis 的 CI,可按需开启和配置

-   Azure Pipelines 按需修改 [配置 azure-pipelines.yml](azure-pipelines.yml)
-   Travis 按需修改[配置文件 .travis.yml](.travis.yml)
