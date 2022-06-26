import React from 'react';
import {Field, Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Button, Text} from '@chakra-ui/react';
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

export const Variants = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = ({target: {id, value}}) => updateArgs({...prevArgs, [id]: value});
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{maxWidth: '330px', width: '100%', marginRight: '30px'}}>
                <Text>Variants: outline, unstyled, flushed, filled, reg</Text>
                <Autocomplete
                    {...args}
                    name="input_1"
                    value={args.input_1}
                    label="Variant: default (outline)"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Autocomplete
                    {...args}
                    name="input_2"
                    value={args.input_2}
                    label="Variant: filled"
                    variant="filled"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Autocomplete
                    {...args}
                    name="input_3"
                    value={args.input_3}
                    label="Variant: unstyled"
                    variant="unstyled"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Autocomplete
                    {...args}
                    name="input_4"
                    value={args.input_4}
                    label="Variant: flushed"
                    variant="flushed"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Autocomplete
                    {...args}
                    name="input_5"
                    value={args.input_5}
                    label="Variant: reg"
                    variant="reg"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
            </div>
            <div style={{maxWidth: '330px', width: '100%'}}>
                <Text>Variants: sm, md, lg (default: md)</Text>
                <Autocomplete
                    {...args}
                    name="input_6"
                    value={args.input_6}
                    size="sm"
                    label="Variant: reg size:sm"
                    variant="reg"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Autocomplete
                    {...args}
                    name="input_7"
                    value={args.input_7}
                    size="lg"
                    label="Variant: reg size:lg"
                    variant="reg"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
            </div>
        </div>
    );
};

Variants.args = {
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
                    variant="reg"
                    component={Autocomplete}
                    placeholder='Enter "sugg" to show suggestions'
                    suggestions={['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4']}
                />
                <Button type="submit" variant="rounded" mt={8}>Submit</Button>
            </Form>
        </Formik>
    </div>
);
