import React from 'react';
import {Field, Formik, Form} from 'formik';
import {Button, Text} from '@chakra-ui/react';
import * as Yup from 'yup';
import {useArgs} from '@storybook/client-api';

import {SelectInput} from '@/components';

export default {
    title: 'Components/SelectInput/SelectInput',
    component: SelectInput
};

const validateSchema = Yup.object().shape({
    example: Yup.string().required('Required')
});

const validateSchemaArray = Yup.object().shape({
    example: Yup.array().of(
        Yup.string()
    ).min(1, 'At least one.')
});

const options = [
    {value: 0, label: 'Option 0'},
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'}
];

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, value: e.target.value});
    return (
        <div style={{maxWidth: '330px'}}>
            <SelectInput {...args} onChange={handleChange}/>
        </div>
    );
};

Basic.args = {
    name: 'example',
    label: 'Text Input',
    options
};

export const Variants = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, [e.target.id]: e.target.value});

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{maxWidth: '330px', width: '100%', marginRight: '30px'}}>
                <Text>Variants: outline, unstyled, flushed, filled, reg</Text>
                <SelectInput
                    name="select_1"
                    value={args.select_1}
                    onChange={handleChange}
                    options={options}
                    label="Variant: reg"
                    variant="reg"
                    size="md"
                    containerStyle={{pt: 2}}
                />
                <SelectInput
                    name="select_2"
                    value={args.select_2}
                    onChange={handleChange}
                    options={options}
                    label="Variant: flushed"
                    variant="flushed"
                    containerStyle={{pt: 2}}
                />
                <SelectInput
                    name="select_3"
                    value={args.select_3}
                    onChange={handleChange}
                    options={options}
                    label="Variant: unstyled"
                    variant="unstyled"
                    containerStyle={{pt: 2}}
                />
                <SelectInput
                    name="select_4"
                    value={args.select_4}
                    onChange={handleChange}
                    options={options}
                    label="Variant: filled"
                    variant="filled"
                    containerStyle={{pt: 2}}
                />
                <SelectInput
                    name="select_5"
                    value={args.select_5}
                    onChange={handleChange}
                    options={options}
                    label="Variant: outline"
                    variant="outline"
                    containerStyle={{pt: 2}}
                />
            </div>
            <div style={{maxWidth: '330px', width: '100%'}}>
                <Text>Variants: sm, md, lg (default: md)</Text>
                <SelectInput
                    name="select_6"
                    value={args.select_6}
                    onChange={handleChange}
                    options={options}
                    label="Variant: reg size: lg"
                    variant="reg"
                    size="lg"
                    containerStyle={{pt: 2}}
                />
                <SelectInput
                    name="select_7"
                    value={args.select_7}
                    onChange={handleChange}
                    options={options}
                    label="Variant: reg size:sm"
                    variant="reg"
                    size="sm"
                    containerStyle={{pt: 2}}
                />
            </div>
        </div>
    );
};

export const Forms = args => (
    <Formik
        initialValues={{example: ''}}
        onSubmit={values => window.alert(JSON.stringify(values))}
        validationSchema={validateSchema}
    >
        <Form>
            <Field
                name="example"
                component={SelectInput}
                variant="reg"
                options={options}
                label="Select Input"
                width="xl"
                {...args}
            />
            <Button type="submit" variant="rounded" mt={8}>Submit</Button>
        </Form>
    </Formik>
);

export const MultiSelectorForm = args => (
    <Formik
        initialValues={{example: []}}
        onSubmit={values => window.alert(JSON.stringify(values))}
        validationSchema={validateSchemaArray}
    >
        <Form>
            <Field
                name="example"
                label="Select Input"
                variant="reg"
                isMulti
                component={SelectInput}
                options={options}
                width="xl"
                {...args}
            />
            <Button type="submit" variant="rounded" mt={8}>Submit</Button>
        </Form>
    </Formik>
);
