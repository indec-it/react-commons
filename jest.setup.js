import {render} from '@testing-library/react';
import React from 'react';
import {Formik} from 'formik';
import {MemoryRouter} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import ReactSelect from 'react-select';

import {themed} from '@/theme';

// Globalize common imports to make them available in all test files
global.React = React;

let mountedComponent;

global.render = (Component, props = {}, options = {}) => {
    if (!mountedComponent) {
        let component = <Component {...props}/>;
        if (options.router) {
            component = <MemoryRouter {...options.router}>{component}</MemoryRouter>;
        }
        if (options.formik) {
            component = <Formik onSubmit={() => {}} initialValues={options.formik}>{component}</Formik>;
        }
        if (options.chakra) {
            component = <ChakraProvider theme={themed}>{component}</ChakraProvider>;
        }
        if (options.wrapper) {
            component = <options.wrapper>{component}</options.wrapper>;
        }
        if (options.reactSelect) {
            component = <ReactSelect components={component}/>;
        }
        mountedComponent = render(component);
    }

    return mountedComponent;
};

global.tearDown = () => {
    if (mountedComponent) {
        mountedComponent.unmount();
    }
    mountedComponent = undefined;
};
