## Things I wouldve changed with more time put into the project

* Thunks: I dont think I'm using the thunk action call correctly. Definitely would've checked that out again and cleaned it up.
* Redux/Container structure: The structure with directly calling dispatch(function) vs dispatch({actionData}) is not clean.
* Theming: refine the theme a little bit

## What I didnt do
* I didnt use any Component rendering tests. I belive that E2E tests cover this purpose a lot better, and that most rendering test are simply a replication of the output of the component. So the approach moves towards snapshot testing, which only add a redundant file to change when adjusting the component, basically a way of checking if the developer really meant to change that file. (one exception in this repo wouldve been worth a test: the click functionality on the ToggleWishlistButton)
* a backend. I use async file loading and Redux-thunk to simulate this, switching to an actual API should only require small changes (syncing store to backend)
* a customized theme. without knowing more about the usage background, it wouldnt make sense to adjust the theme to fit a specific corporate identity or other requirements
* cleanly separated commits: since i am the only person ever working on this, there is no need for commits that can be rolled back, so i saved myself the overhead of doing that

## What I did
* Project setup with typescript + eslint + prettier + editorconfig setup out of create react app
* react UI using material UI
* redux state management
* async initial data loading using redux thunk
* cypress testing of implemented functionalities

=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
