import React from 'react';

import {LoadingPage} from '@/components';

export default {
    title: 'Components/LoadingPage/LoadingPage',
    component: LoadingPage
};

export const Basic = args => (
    <LoadingPage {...args}/>
);

Basic.args = {
    noStatic: false
};
