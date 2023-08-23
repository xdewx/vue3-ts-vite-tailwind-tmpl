# Vue3项目快速开发模版

## 仓库分支说明

1. main分支是基础分支，不包含UI框架
2. naive分支基于main分支，并引入了naive组件库

## 项目结构说明
created by `npm create vue@3`

1. vite+vitest
1. playwright
1. ts+vue-tsc
1. pinia+vue-router
1. eslint+prettier
2. tailwindcss+postcss
1. unplugin-auto-import
1. unplugin-vue-components
1. unplugin-icons
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
~~"tauri:dev": "cross-env RUST_BACKTRACE=1 concurrently -k \"pnpm tauri dev\" \"pnpm dev\""~~
由于tauri初始化时设置了beforeDevCommand等，因此没有必要使用上述命令手动启动二者

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm run build

# Runs the end-to-end tests
pnpm run test:e2e
# Runs the tests only on Chromium
pnpm run test:e2e -- --project=chromium
# Runs the tests of a specific file
pnpm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
pnpm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```
