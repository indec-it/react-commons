import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useArgs} from '@storybook/client-api';
import {Button, Text} from '@chakra-ui/react';
import * as Yup from 'yup';

import {Checkbox} from '@/components';

export default {
    title: 'Components/Checkbox/Checkbox',
    component: Checkbox
};

const validateSchema = Yup.object().shape({
    example: Yup.boolean().oneOf([true], 'Field must be checked')
});

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, value: e.target.checked});

    return (
        <div style={{maxWidth: '330px'}}>
            <Checkbox {...args} onChange={handleChange}/>
        </div>
    );
};

Basic.args = {
    label: 'Checkbox Input',
    name: 'example',
    value: false
};

export const Variants = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = ({target: {id, checked}}) => updateArgs({...prevArgs, [id]: checked});
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{maxWidth: '330px', width: '100%', marginRight: '30px'}}>
                <Text>Variants: outline, unstyled, flushed, filled, reg</Text>
                <Checkbox
                    name="input_1"
                    value={args.input_1}
                    size="sm"
                    label="variant: normal checkbox sm"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_2"
                    value={args.input_2}
                    size="md"
                    label="variant: normal checkbox md"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_3"
                    value={args.input_3}
                    size="lg"
                    label="variant: normal checkbox lg"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_4"
                    value={args.input_4}
                    size="sm"
                    variant="circular"
                    label="variant: circular checkbox sm"
                    colorScheme="orange"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_5"
                    value={args.input_5}
                    size="md"
                    variant="circular"
                    label="variant: circular checkbox md"
                    colorScheme="orange"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_6"
                    value={args.input_6}
                    size="lg"
                    variant="circular"
                    label="variant: circular checkbox lg"
                    colorScheme="orange"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_7"
                    value={args.input_7}
                    size="sm"
                    variant="reg"
                    label="variant: reg checkbox sm"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_8"
                    value={args.input_8}
                    size="md"
                    variant="reg"
                    label="variant: reg checkbox md"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_9"
                    value={args.input_9}
                    size="lg"
                    variant="reg"
                    label="variant: reg checkbox lg"
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_10"
                    value={args.input_10}
                    label="value: false disabled"
                    variant="reg"
                    size="md"
                    isDisabled
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_10"
                    value={!args.input_10}
                    label="value: true disabled"
                    variant="reg"
                    size="md"
                    isDisabled
                    onChange={handleChange}
                />
                <Checkbox
                    name="input_11"
                    value={!args.input_11}
                    label="is read only"
                    variant="reg"
                    size="md"
                    isReadOnly
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export const Forms = () => (
    <div style={{maxWidth: '330px'}}>
        <Formik
            initialValues={{example: false}}
            onSubmit={values => window.alert(JSON.stringify(values))}
            validationSchema={validateSchema}
        >
            <Form>
                <Field
                    name="example"
                    label="Checkbox Input"
                    component={Checkbox}
                />
                <Button type="submit" variant="rounded" mt={8}>Submit</Button>
            </Form>
        </Formik>
    </div>
);
