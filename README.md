# react-commons V5 🚀

https://indec-it.github.io/react-commons/

## Glossary

1. [Motivation](#motivation)
1. [Installation](#installation)
1. [Start](#start)
1. [Structure](#structure)
1. [Dependencies](#dependencies)
1. [Tests](#tests)
1. [Contributing](#contributing)

## Motivation

We've created this package to share components and logic between our different projects.

We use [Storybook](https://storybook.js.org), it allows you to test and see how each component works without install the package in your project.

Our components are built with [Chakra-ui](https://chakra-ui.com), in our previous versions of react-commons they were built with [Reactstrap](https://github.com/reactstrap/reactstrap) but we realized that we needed to add more custom styles so we decided to move to Chakra.

## Installation

```sh
$ npm install @indec/react-commons
```

## Start

To start storybook you must run the following command:

```sh
$ npm start
```

Storybook will be open in your default browser at [http://localhost:6006](http://localhost:6006).

## Structure

The project is split into the following directories. When writing code, use the following guidelines to determine where it should be placed. You can also take a look at the code yourself for in-depth examples.

```
src/
  components/
  hooks/
  constants/
  theme/
  utils/
```

## Dependencies

These are the core dependencies you'll need to get acquainted yourself with:

- [React](https://reactjs.org) 
- [Chakra](https://chakra-ui.com) (component library our UI is built upon)
- [Formik](https://jaredpalmer.com/formik/docs/api/formik#validationschema-schema-gt-schema) (to make it easier to write forms with React)
- [Yup](https://github.com/jquense/yup) (handles form validation)
- [Storybook](https://storybook.js.org) (component library)
- [Jest](https://jestjs.io) (testing framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (DOM interface for testing)
- [EsLint](https://eslint.org) (used to lint code)

## Tests

To run the tests you must run the following command:

```sh
$ npm run test
```

When writing tests, make sure to use the following format to keep the tests clean and consistent:

```jsx
import {getByText} from "@testing-library/react";

import Button from "./Button";

describe("<Button>", () => {
  let props;
  const getComponent = () => render(Button, props);

  beforeEach(() => {
    props = {
      children: "Label"
    };
  });
  afterEach(tearDown);

  it("should render `props.children`", () => {
    const {container} = getComponent();
    expect(getByText(container, props.children)).toBeInTheDocument();
  });

  describe("when `props.plus` is `true`", () => {
    beforeEach(() => {
      props.plus = true;
    });

    it("should render a plus character", () => {
      const {container} = getComponent();
      expect(getByText(container, `+ ${props.children}`)).toBeInTheDocument();
    });
  });
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

