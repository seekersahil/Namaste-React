# Theory Assignment - Day 2

## What is `NPM`?

NPM is a package manager (like yarn) and package repository that can be utilised to install package dependencies in a project. It uses configuration in `package.json` file for importing dependencies and stores the dependencies in `node_modules` folder.

## What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack or Vite is a bundler that bundles the various components and elements of the code. It also utilises other dependencies for functions like image optimization, minification, tree shaking, hot module replacement etc.
We need bundlers to create a production ready code that is optimised and minified. Bundlers are also needed for combining necessary code of various modules in the project so that final render has the code of all of the necessary dependencies (tree shaking).

## What is `.parcel cache`?

`.parcel cache` folder is created by parcel bundler every time we run parcel build commands. This stores the temporary code files that are usually repeat aor will remain the same during next build. This approach allows next build to run faster and

## What is `npx` ?

npx is the execution command given by npm. It is equivalent to `npm run`.

## What is difference between `dependencies` vs `devDependencies`?

`dependencies` are the requirements which our project imports from npm or yarn into the project that provide additional functionalities tgo the project.
Whereas `devDependencies` are those dependencies which we require only during the development or build phase of the project. These dependencies are not required post build during production phase.

## What are Transitive Dependencies?

Every dependency that we import in the project doesn't have the full code needed for it. It also is a project that depends upon another dependencies mentioned in it's own package.json. This dependence of dependency upon another dependencies is called as transitive dependency.

## What is Tree Shaking?

When bundlers minify the code, they need some code from the dependencies that is required in the final build. Bundlers add only that code to the final build that is required and leave the redundant unused code from the dependencies so as to keep the final build optimised. This selective approach is called Tree Shaking.

## What is Hot Module Replacement?

Hot Module Replacement is the process where a program keeps track of the changes in the code using file watcher algorithm during development and happens as soon as those changes are saved. The program adds, removes or exchanges the modules without fully reloading.
Bundlers in react come with HMR feature.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

- Minification of files
- Image Optimisation
- Hot Module Replacement
- Tree Shaking
- Bundling
-

## What is `.gitignore`? What should we add and not add into it?

.gitignore file includes all those files which we don't want to push onto the git repository like node modules, cache files etc. These are those files that can be generated on the server side again. and need not to be part of git repositories.

## What is the difference between `package.json` and `package##lock.json`

package.json is the configuration file for the project package manager that includes version information of the projects whereas package-lock.json is the configuration file for the versions of the packages that is currently installed in the project.

## Why should I not modify `package-lock.json`?

## What is `node_modules`? Is it a good idea to push that on git?

## What is the `dist` folder?

## What is `browserlists`? How to make our app work on old browsers(IE)?

### Read about dif bundlers: vite, webpack, parcel

### Read about: `^(caret)` and `~(tilda)`

### Read about Script types in html (MDN Docs)
