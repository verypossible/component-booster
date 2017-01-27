# Component Booster Kit

The purpose of this project is to enable rapid prototyping with pre-built
components in combination with our [React Booster
Kit](https://github.com/spartansystems/booster-kit-react).

## Features

Nothing yet!

## Roadmap

The goal is to be able to npm install this package and have access to all the
components here through some simple generator scripts, inspired by [Thoughtbot's
wonderful Refills library](https://github.com/thoughtbot/refills)

## Contribution Guidelines

* Be nice. Have fun. Get productive.

* Please enable linting on your local machine, PR's that do not pass the linter
  will not be merged

* Each component must be unit tested and well documented.

* Right now, we're using css modules.

* A story file for each component is also required so that all the components
  are available for demo in the local storybook.

* When creating a new component for the library, use one of the included
  generators:
  - `yarn run generate:stateless --  ComponentName`
  - `yarn run generate:component --  ComponentName`

## Common Commands

```bash
# get set up
yarn install

# run tests
yarn run test

# run tests and watch
yarn run test -- --watch

# start the storybook server
yarn start
```

