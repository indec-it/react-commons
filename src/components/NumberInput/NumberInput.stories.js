import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Text} from '@chakra-ui/react';
import {useArgs} from '@storybook/client-api';

import {NumberInput} from '@/components';

export default {
    title: 'Components/NumberInput/NumberInput',
    component: NumberInput
};

const validateSchema = Yup.object().shape({
    example: Yup.number()
        .positive('must be greater than zero')
        .required('Required')
});

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, value: e.target.value});
    return (
        <div style={{maxWidth: '330px'}}>
            <NumberInput {...args} onChange={handleChange}/>
        </div>
    );
};

Basic.args = {
    name: 'example',
    label: 'Text Input',
    placeholder: 'Placeholder'
};

export const Variants = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = ({target: {id, value}}) => updateArgs({...prevArgs, [id]: value});
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{maxWidth: '330px', width: '100%', marginRight: '30px'}}>
                <Text>Variants: outline, unstyled, flushed, filled, reg</Text>
                <NumberInput
                    name="input_1"
                    value={args.input_1}
                    label="Variant: reg"
                    variant="reg"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <NumberInput
                    name="input_2"
                    value={args.input_2}
                    label="Variant: outline"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <NumberInput
                    name="input_3"
                    value={args.input_3}
                    label="Variant: filled"
                    variant="filled"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <NumberInput
                    name="input_4"
                    value={args.input_4}
                    label="Variant: flushed"
                    variant="flushed"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <NumberInput
                    name="input_5"
                    value={args.input_5}
                    label="Variant: unstyled"
                    variant="unstyled"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <NumberInput
                    name="input_6"
                    value={args.input_6}
                    label="hiddenStepper"
                    onChange={handleChange}
                    hiddenStepper
                    containerStyle={{pt: 2}}
                />
            </div>
            <div style={{maxWidth: '330px', width: '100%'}}>
                <Text>Variants: sm, md, lg (default: md)</Text>
                <NumberInput
                    name="input_7"
                    value={args.input_7}
                    label="Variant: reg size: lg"
                    variant="reg"
                    onChange={handleChange}
                    size="lg"
                    hiddenStepper
                    containerStyle={{pt: 2}}
                />
                <NumberInput
                    name="input_8"
                    value={args.input_8}
                    label="Variant: reg size: sm"
                    variant="reg"
                    size="sm"
                    onChange={handleChange}
                    hiddenStepper
                    containerStyle={{pt: 2}}
                />
            </div>
        </div>
    );
};

export const Forms = () => (
    <Formik
        initialValues={{example: ''}}
        onSubmit={values => window.alert(JSON.stringify(values))}
        validationSchema={validateSchema}
    >
        <Form noValidate>
            <Field
                name="example"
                label="Number Input"
                component={NumberInput}
                variant="reg"
                hiddenStepper
                width="lg"
            />
            <Button type="submit" variant="rounded" mt={8}>Submit</Button>
        </Form>
    </Formik>
);
