# Moonlay Assessment

Created by Farhan Rafly Fahrezi Saepulloh at <raflyfahr15@gmail.com>

## Stack

-   Create React App
-   Tailwind
-   Mobx State Tree

## How to run

Please note that I'm using Yarn.

```bash
# For installing all dependencies

yarn
```

then, run the app in the development mode.

```
yarn run start
```

Open `localhost:3000` to view the webpage in the browser.

## How to test

After running how to run section run this following code to running `jest` for testing.

```
yarn run test
```

Disclaimer:
<br>
I still had some failed test case caused by using import outside module. The problem is not solved yet but I'm still figured out and new learning for me.

## Documentation

Here is the explantion of the folder structure under `/src` folder.

-   `/app` - Folder that contain app component.

-   `/assets` - Folder that contain SVG icons used as JSX Element.
-   `/components` - Folder that contain reusable components.
-   `/context` - Folder to create context of the store.
-   `/hooks` - Folder that contain custom hooks like `useStore`.
-   `/layout` - Folder that contain template of page.
-   `/models` - Folder that contain type of data.
-   `/modules` - Folder that represent a page so everypage is represent as a module here.
-   `/store` - Folder that contain every store and type of model that used.
-   `/styles` - Folder that contain styles like global styles.
-   `/utils` - Folder that contain reusable functions.

## Deployment With Vercel

https://farhan-moonlay-assessment.vercel.app/

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
