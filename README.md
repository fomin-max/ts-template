# Typescript template project

Project repository: [GitHub](https://github.com/fomin-max/ts-template)

- [Description](#Description)
- [Technology](#Technology)
- [Code style](#Code-style)
- [Project start](#Project-start)
- [npm scripts](#npm-scripts)
- [Code structure](#Code-structure)
- [Contributors](#Contributors)


## Description

Template for start project on typescript


## Technology

- [TypeScript](https://www.typescriptlang.org)
- [Rematch](https://github.com/rematch/rematch)
- [React](https://reactjs.org/docs/getting-started.html)
- [jest](https://jestjs.io/docs/en/getting-started.html)
- [Sass](https://sass-scss.ru/)


## Code style

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-).


## Project start

```
git clone https://github.com/fomin-max/ts-template.git
```

```
cd ts-template/
```

```
npm i
```

```
npm start
```


## npm scripts

```
npm start                 : start project on localhost
npm run build             : build project for production
npm run check             : check code on syntax and types error with lint и TypeScript
npm run lint              : check code syntax error with lint
npm run tsc               : check types error with TypeScript
```


## Code structure

```
.
├─── src                               : source code
|     ├─── features                    : features (components, models, utils, tests)
|     |      ─── Example               : feature directory
|     |           └─── model.ts        : feature model
|     |           └─── selectors.ts    : global state feature selector
|     |           └─── Component.tsx   : feature component
|     |           └─── Component.scss  : feature component styles
|     |           └─── types.ts        : typescript types for feature
|     |           └─── enums.ts        : typescript enums for feature
|     |           └─── index.ts        : feature components export
|     |
|     ├─── pages                       : containers for features
|     |     ├─── Example               : page directory
|     |     |     ├─── Example.tsx     : page
|     |     |     ├─── Example.scss    : page styles
|     |     |     └─── index.ts        : export
|     |     |
|     |     └─── index.ts              : pages export
|     |
|     ├─── store                       : rematch configuration
|     |     ├─── constants.ts          : feature constants
|     |     └─── models.ts             : container for all features
|     |
|     ├─── hooks                       : custom hooks
|     ├─── public                      : static files
|     └─── utils                       : helpers-functions
```


## Contributors

- Maxim Fomin (fominmax@inbox.ru)
