import React from 'react';

import {MessageError} from '@/components';

export default {
    title: 'Components/MessageError/MessageError',
    component: MessageError
};

export const Basic = args => (
    <MessageError {...args}/>
);

Basic.args = {
    messageError: 'error'
};
