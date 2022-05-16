# Feefo: UI Technical Assessment

Implement the design provided in `design.png` as a set of React components.

![account overview design](./design.png?raw=true)

There is a stub for the data structure in `app.js`. Please use this to drive the view content and derive any calculated data from this in your components. The container component has also been created `AccountOverview` `./src/account-overview.jsx`.

## We would like to see
- The layout should grow/shrink sensibly with the viewport
- The design split into several components
- Usage of `proptypes`
- Unit tests covering your components
- a11y considered and relevant ARIA attributes added

## Technical Notes
- Assets for the font in the design (roboto) have been included via google fonts
- Font Awesome icons are available via the Font Awesome React bindings (there is a usage example in `account-overview.jsx`)
- The repository is set up to work with `styled-components` if you feel comfortable doing so, please use this instead of css
- The repository is set up to use jest + testing library for unit tests

## Setup
1. Run `yarn install` to install required dependencies
2. Run `yarn start` to start a local development server - the react default port is `:3000` so 
open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

-----------------------------------------------------

## Candidate notes

### This project was created using

- Node 17.8.0
- `npx create-react-app feefo-ui-assessment --template typescript`
- ESlint
- Prettier

### Technical notes
- I'm not accustomed to using styled components so I kept using SASS (I may change in the future :D).
- My knowledge about testing is not very good, I need to implove.
- I used typescript rather than proptypes, think it's better to follow the rules.