Design System Base
==================
> 프로젝트에 대한 주요 정보(목적, 환경 구성, 라이선스 등) 작성  
> 인수인계 및 오랜 시간이 흘러도 누구나 쉽게 이해할 수 있도록 작성  
> 아래 내용을 참고하여 간결하고 명료하게 작성  
(추가로 작성할 항목이 있을 시 자유롭게 작성하며, 불필요한 항목은 삭제)

## Table of Contents
1. [Description](#description)
2. [Environment](#environment)
3. [Prerequisite](#prerequisite)
4. [Setup](#setup)

## Description
> 서술 - 프로젝트 주요 설명(목적, 유의사항 등)
- 모든 프로젝트에 사용
- 사용성 보장(누구나 쉽게 사용 가능)
- 재사용성 향상
- UI 파편 최소화

## Environment
> 환경 - 프로젝트 환경 구성의 정보
- 형태: Responsive(Adaptive), PC(Mobile) Web, Hybrid App
- 대상: OS(Windows, MacOS), Browser(Chrome, Safari, Firefox, Internet Explorer 11)
- Git(latest version)
- Node.js LTS (version - 16.x.x 이상)
- Webpack(version - 5.x.x)

## Prerequisite
> 전제조건 - 공통으로 사용하는 패키지 및 프로젝트 의존성에 해당하는 패키지 정보


### dependencies
- @babel/cli: "^7.20.7",
- @babel/polyfill: "^7.12.1",
- @toast-ui/chart: "^4.6.1",
- @toast-ui/select-box: "^1.1.0",
- jquery: "^3.6.0",
- tui-context-menu: "^2.1.9",
- tui-date-picker: "^4.3.3",
- tui-editor: "^1.4.10",
- tui-grid: "^4.21.7",
- tui-pagination: "^3.4.1",
- tui-time-picker: "^2.1.6",
- tui-tree: "^4.0.9"

## devDependencies
- @babel/core: "^7.17.2",
- @babel/preset-env: "^7.16.11",
- @squoosh/lib: "^0.4.0",
- autoprefixer: "^10.4.4",
- babel-loader: "^8.2.3",
- copy-webpack-plugin: "^10.2.4",
- css-loader: "^6.6.0",
- css-minimizer-webpack-plugin: "^3.4.1",
- handlebars: "^4.7.7",
- handlebars-loader: "^1.7.1",
- html-webpack-plugin: "^5.5.0",
- image-minimizer-webpack-plugin: "^3.2.3",
- mini-css-extract-plugin: "^2.5.3",
- node-sass: "^7.0.1",
- postcss: "^8.4.12",
- postcss-loader: "^6.2.1",
- postcss-scss: "^4.0.3",
- sass-loader: "^12.4.0",
- svg-sprite-loader: "^6.0.11",
- terser-webpack-plugin: "^5.3.1",
- url-loader: "^4.1.1",
- webpack: "^5.68.0",
- webpack-cli: "^4.9.2",
- webpack-dev-server: "^4.7.4"

### Setup
```sh
// Packages Install
npm install

// Bundle - Public(assets, pages, etc.)
npm run build

// Dev Server - http://localhost:9000/
npm run dev
```


**[⬆ back to top](#table-of-contents)**