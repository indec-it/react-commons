import {render} from '@testing-library/react';
import React from 'react';
import {Formik} from 'formik';
import {MemoryRouter} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';

import {themed} from '@/theme';

// Globalize common imports to make them available in all test files
global.React = React;
global.ENDPOINT = 'endpoint';
global.AUTH_ENDPOINT = 'authEndpoint';
global.RECAPTCHA_KEY = 'key';
global.ENABLE_RECAPTCHA = 'false';
global.AUTH_ENDPOINT = 'authEndpoint';
global.RECAPTCHA_KEY = 'key';
global.ENABLE_RECAPTCHA = 'false';
global.CENSUS_URL = '/';

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
