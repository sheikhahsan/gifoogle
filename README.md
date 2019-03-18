# gifoogle

## Giphy app in Angular, React.js & Vue.js

A starter web app in popular JavaScript frameworks. **gifoogle-angular, gifoogle-react** and **gifoogle-vue** are three standalone applications developed as a boilerplate for all 3 frameworks.

## What you get?

- A boilerplate to start working in any of the framework
- Cover necessary elements for building an app
- Project structure (for small to medium sized applications)
- Communication with the API
- Using router navigation (vue-router/react-router-dom/angular router module)
- Using store (vuex/redux)
- Using Bootstrap 4 with Scss pre-processor


## Get GIPHY API key

Get API key from https://developers.giphy.com/

There is a **rate-limit** for a development API key of GIPHY API (maximum of 42 search requests an hour, 1000 search requests a day). So it is a good to get a new key before running project.

Replace the newly created **API_KEY** in following files:

1. [gifoogle-react/src/api/constants.js](https://github.com/sheikhahsan/gifoogle/blob/master/gifoogle-react/src/api/constants.js)
2. [gifoogle-vue/src/api/constants.js](https://github.com/sheikhahsan/gifoogle/blob/master/gifoogle-vue/src/api/constants.js)
3. [gifoogle-angular/src/app/services/api.constants.ts](https://github.com/sheikhahsan/gifoogle/blob/master/gifoogle-angular/src/app/services/api.constants.ts)

## Usage
```
git clone https://github.com/sheikhahsan/gifoogle.git
```
Replace your API key
```
cd project-folder
npm install
npm start
```

## Acknowledgments
- [GIPHY for Developers](https://developers.giphy.com/)

## Screenshot

![alt text](https://user-images.githubusercontent.com/19500703/54367393-1b61a900-4694-11e9-9d48-f92844863010.png)
