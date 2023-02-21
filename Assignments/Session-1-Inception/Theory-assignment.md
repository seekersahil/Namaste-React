# Day 1 Assignment - December 24, 2022

## What is Emmet?

Emmet is a shortcut or a quick way to type html tags within an HTML document.
example - div.container will create a div tag with class atrribute "conatiner".

## Difference between a Library and Framework?

A framework requires the whole project to be built in it's own way and handles all the routing, functions, models, controllers etc. as per framework documentation.
whereas a library can be used within any language or framework project with affecting the root or core of the project and can also be removed without impacting any other files nin the project.

## What is CDN? Why do we use it?

CDN is Content Delivery Network. This network utilises a wide distributed group of servers that are connected together for providing the hosted files with minimum latency.

## Why is React known as React?

When react was created, the developers wanted to create maximum of the HTML and CSS components from javascript itself with minimal code in HTML and CSS. This would allow developers to code more dynamic webApps. These dynamic webapps would be responsive to clicks and navigations across the webpages and would REACT to the actions. Thus the library was also named React as it allows developers to create reactive webApps.

## What is crossorigin in script tag?

crossorigin in script tag is used when the source wants to import files or script from different source than the mentioned url which is provided within api.

## What is diference between React and ReactDOM

While React is library that handles the javascript component which can utilize all sort of machines, be it browser or a mobile device (using react native) or a rendering models (using React3D); ReactDOM is used to manipulate the DOM structure and objects, which is used in the web browser.

## What is difference between react.development.js and react.production.js files via CDN?

react.development.js is a larger not minimised version of React that is usually used to build the apps during development phase. react.production.js is smaller minimised version of React used during production phase to minimise the import time in live React webApps.

## What is async and defer?

| async                                                                                                                                                    | defer                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| async imports the script along with html rendering                                                                                                       | defer imports the script along with html rendering                                                    |
| async executes the script by halting the html rendering and post script execution, html rendering resumes                                                | defer executes the script code after html rendering is complete                                       |
| async doesn't follow a particular order while importing the script (wherever dependencies for other scripts are being imported, async should be avoided) | defer follows the written order of importing the scripts and is generally used to import dependencies |
