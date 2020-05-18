This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) + TypeScript.

## About
The project contains a table of companies with incomes fetched from an external API.

Files structure and app architecture:
* App.tsx - Main app wrapper.
* components - Each component has its own directory, styles are in the 'styles' subfolder.
* config - Please make sure to add your API URL and rename the file to 'config.tsx'.
* images - App assets can be found here.
* index.tsx - Root React app render function.
* services - All components logic goes here. Types and interfaces can be found on the 'interfaces' subfolder.
```bash
├── src
│   ├── App.tsx
│   ├── components
│   │   └── table
│   │       ├── TablePagination.tsx
│   │       ├── TableRow.tsx
│   │       ├── TableWrapper.tsx
│   │       ├── index.tsx
│   │       └── styles
│   │           └── index.tsx
│   ├── config
│   │   ├── config.example.tsx
│   ├── images
│   │   └── sort-solid.svg
│   ├── index.tsx
│   └── services
│       ├── ApiService.tsx
│       ├── TableService.tsx
│       ├── incomeService.test.tsx
│       ├── incomeService.tsx
│       └── interfaces
│           ├── company.interface.ts
│           ├── companyDetails.interface.ts
│           ├── incomes.interface.ts
│           ├── tablePaginationProps.interface.ts
│           ├── tableRowProps.interface.ts
│           └── tableWrapperProps.inteface.ts
└── tsconfig.json
```
## Before start

Edit config file with your API URL, example:
### `export const API_URL = 'https://myapi.io';`

Install dependencies:
## `yarn install`

## Working demo
[DEMO](https://companies-demo.piechaczek.dev)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
