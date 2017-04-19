# Fugiface v3

Front-end client for the Fugidaire, to display the list of beers on tap, and
later manage what beers are available and do a little inventory management.

## Getting started

This project was built using [Create React App](https://github.com/facebookincubator/create-react-app),
refer to the project's documentation for more details. I'll add more to this
readme after the project is working.

To get started, open a terminal in the root folder, and run the following
commands to start a development server.

```
npm install
npm start
```

### Setting up the database

Fugiface currently uses Firebase to store the beer data, since it's really easy
to setup and get running with. The app comes with a set of default beers to fill
up the database when it's empty.

You'll need to create a project on Firebase, make a copy of the `base_sample.js`
file in the `src` folder, then replace the values by the keys you find in the
"Add Firebase to your web app" section from your Firebase dashboard.

Then just click the "Load Defaults" button to populate your database!