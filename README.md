## Required <所需环境>

-   `npm`(版本> 6.0)或者`yarn`
-   `VSCode` 编辑器
-   小程序开发工具

## Install <安装>

1. create project <新建模板项目>

```
npm init miniprogram NewFuture/miniprogram-template [本地目录]
```

不指定`本地目录`则在当前目录创建

2. install dependences <安装依赖>

切换到项目目录，安装项目依赖

```
npm i
```

3. 编译

```
npm run build
```

4. 调试工具打开`dist`目录即可预览(安装其他 npm 包后需要编译 NPM)

### script <命令>

-   `npm run clean`: 清理 dist 目录
-   `npm run dev`: 重新编译项目并实时更新
-   `npm run build`: 重新编译打包(支持三个环境)
-   `npm run watch`: 仅监测文件变化实时更新(支持三个环境)
-   `npm run release`: 发布前优化编译打包(支持三个环境)
-   `npm run lint`: 代码风格和格式检查(支持不同语言单独检查)
-   `npm run fix`: 自动修复可修复的 lint 和代码风格问题
-   `npm run test`: 测试

全部快捷命令[package.json](https://github.com/NewFuture/miniprogram-template/blob/master/package.json#L6-L38)

## Coding <编码>

### language <语言>

#### js

-   typescript/JavaScript (推荐`ts`)
-   Eslint + Prettier 检查代码风格和自动格式化

#### wxml

-   wxml/html
-   Htmlhit + Prettier 检查代码风格和自动格式化

#### wxss

-   scss/sass/css (推荐`scss`)
-   Stylelint + Prettier 检查代码风格和自动格式化

#### json

-   jsonc/json/json5 支持注释
-   Prettier 代码检查和自动格式化

### Editor <编辑器>

推荐使用`VSCode`

1. 首次使用根据提示自动安装相关插件
2. 所有插件已配置好,会自动进行代码检查提示,保存时自动修复
