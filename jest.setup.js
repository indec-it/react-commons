import {render} from '@testing-library/react';
import React from 'react';

global.React = React;

let mountedComponent;

global.render = (Component, props = {}) => {
    if (!mountedComponent) {
        let component = <Component {...props}/>;
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
