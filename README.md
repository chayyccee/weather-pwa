# Progressive Weather Application created using React JS and Open weather API

[![pas](https://img.shields.io/static/v1?&message=ProgressiveApp.Store&color=74b9ff&style=flat&label=Follow%20Weather%20App%20by%20Chinedu%20at)](https://progressiveapp.store/pwa/Weather-App-by-Chinedu)

This project is focused on PWA functionality of an App and also is aimed at gaining full understanding of how PWAs work.
This project passes all the [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) PWA aspects tests.
This project was bootstrapped with the [Create React App](https://github.com/facebook/create-react-app).

visit [Here](https://pwa-weather-app-by-chinedu.netlify.app/) to view the app in your browser.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

To learn about Open Weather API, check [here](https://openweathermap.org/api)

Learn about Netlify [here](https://docs.netlify.com/)

## Making This Progressive Web App

In making this PWA, I used the [Google Lighthouse Tool](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) to test the Application in dev and prod.

### Analyzing the PWA

So below are links that will give you further insights on the pass requirements and conditions for each test.

1). [Web app manifest and service worker meet the installability requirements](https://web.dev/installable-manifest/?utm_source=lighthouse&utm_medium=devtools)

2). [Registers a service worker that controls page and start_url](https://web.dev/service-worker/?utm_source=lighthouse&utm_medium=devtools)

3). [Redirects HTTP traffic to HTTPS](https://web.dev/redirects-http/?utm_source=lighthouse&utm_medium=devtools)

4). [Configured for a custom splash screen](https://web.dev/splash-screen/?utm_source=lighthouse&utm_medium=devtools)

5). [Sets a theme color for the address bar.](https://web.dev/themed-omnibox/?utm_source=lighthouse&utm_medium=devtools)

6). [Content is sized correctly for the viewport](https://web.dev/content-width/?utm_source=lighthouse&utm_medium=devtools)

7). [Has a `<meta name="viewport">` tag with ```width``` or ```initial-scale```](https://web.dev/viewport/?utm_source=lighthouse&utm_medium=devtools)

8). [Provides a valid ```apple-touch-icon```](https://web.dev/apple-touch-icon/?utm_source=lighthouse&utm_medium=devtools)

9). [Manifest has a maskable icon](https://web.dev/maskable-icon-audit/?utm_source=lighthouse&utm_medium=devtools)

    Please kindly note that number 3 won't pass while still in localhost, until deployment.

## Deployment

This App is deployed on [Netlify](https://pwa-weather-app-by-chinedu.netlify.app/)

## If one or more test(s) fail - My little assistance

In the event you want to build your PWA and test it using the [Google Lighthouse Tool](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en), It is almost certain that the source of your stress is in the ```manifest.json``` file.

So please go to the link of the specific test that's failing from the tests links above, read carefully, study the code, understand it, compare the logic to yours and write your code.

Now in addition to that, here are a few debug tips and boxes you should be sure to check,

    1. Make absolutely certain that your manifest.json is properly linked in your index.html file.
    2. Make sure that the keys and values in your manifest.json are all spelt correctly.
    3. Make sure all icon files are in png fromat.
    4. Make sure you are using "image/png" as your icons type value instead of "image.png" (when unaware, debugging this problem can give you grey hair).
    5. Ensure you are using the right data structure. Know which are just objects and which are array of objects
    6. If all is good in your manifest.json file, please mind your promises in the serviceWorker file.

## License

  MIT © Chinedu Eke  

## Acknowledgments

    - Javascript Mastery

## Author

  Chinedu Eke
