import React from 'react';
import {Field, Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Button} from '@chakra-ui/react';
import {useArgs} from '@storybook/client-api';

import {Autocomplete} from '@/components';

export default {
    title: 'Components/Autocomplete/Autocomplete',
    component: Autocomplete
};

const validateSchema = Yup.object().shape({
    example: Yup.string().required('Required')
});

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, value: e.target.value});
    return (
        <div style={{maxWidth: '330px'}}>
            <Autocomplete {...args} onChange={handleChange}/>
        </div>
    );
};

Basic.args = {
    label: 'Autocomplete Input',
    name: 'example',
    placeholder: 'Enter "sugg" to show suggestions',
    suggestions: ['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4']
};

export const Forms = () => (
    <div style={{maxWidth: '330px'}}>
        <Formik
            initialValues={{example: ''}}
            onSubmit={values => window.alert(JSON.stringify(values))}
            validationSchema={validateSchema}
        >
            <Form>
                <Field
                    name="example"
                    label="Autocomplete Input"
                    component={Autocomplete}
                    placeholder='Enter "sugg" to show suggestions'
                    suggestions={['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4']}
                />
                <Button type="submit" variant="rounded" mt={8}>Submit</Button>
            </Form>
        </Formik>
    </div>
);
