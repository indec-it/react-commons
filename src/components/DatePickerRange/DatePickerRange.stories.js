import React from 'react';
import {Formik, Form} from 'formik';
import {useArgs} from '@storybook/client-api';
import {Button} from '@chakra-ui/react';

import {DatePickerRange} from '@/components';

export default {
    title: 'Components/Date/DatePickerRange',
    component: DatePickerRange
};

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, [e.target.id]: e.target.value});
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <DatePickerRange {...args} onChange={handleChange} isFormik={false}/>
        </div>
    );
};

Basic.args = {
    fromDatePlaceholder: 'Date start',
    toDatePlaceholder: 'Date end',
    startDateName: 'startDate',
    endDateName: 'endDate',
    startDate: ''
};

export const Forms = args => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <Formik
            initialValues={{startDateName: '', endDateName: ''}}
            onSubmit={values => window.alert(JSON.stringify(values))}
        >
            <Form>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <DatePickerRange {...args} isFormik/>
                </div>
                <Button type="submit" variant="rounded" mt={2}>Submit</Button>
            </Form>
        </Formik>
    </div>
);

Forms.args = {
    fromDatePlaceholder: 'Date start',
    toDatePlaceholder: 'Date end',
    startDateName: 'startDateName',
    endDateName: 'endDateName'
};
