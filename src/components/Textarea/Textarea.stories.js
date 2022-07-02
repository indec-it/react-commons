import React from 'react';
import {Field, Formik, Form} from 'formik';
import {Button, Text} from '@chakra-ui/react';
import * as Yup from 'yup';
import {useArgs} from '@storybook/client-api';

import {Textarea} from '@/components';

export default {
    title: 'Components/Textarea/Textarea',
    component: Textarea
};

const validateSchema = Yup.object().shape({
    example: Yup.string().required('Required')
});

const parameters = {controls: {exclude: ['form', 'field', 'name', 'onChange']}};
const argTypes = {
    quote: {control: {type: 'text'}},
    hasError: {control: {type: 'text'}},
    width: {control: {type: 'select'}, options: [null, 'xs', 'sm', 'md', 'lg', 'xl']},
    messageColor: {control: {type: 'color'}}
};

export const Basic = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = e => updateArgs({...prevArgs, value: e.target.value});
    return (
        <div style={{maxWidth: '330px'}}>
            <Textarea {...args} onChange={handleChange}/>
        </div>
    );
};

Basic.parameters = parameters;
Basic.argTypes = argTypes;
Basic.args = {name: 'example'};

export const Variants = args => {
    const [prevArgs, updateArgs] = useArgs();
    const handleChange = ({target: {id, value}}) => updateArgs({...prevArgs, [id]: value});
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{maxWidth: '330px', width: '100%', marginRight: '30px'}}>
                <Text>Variants: outline, unstyled, flushed, filled, reg</Text>
                <Textarea
                    name="input_1"
                    value={args.input_1}
                    label="Variant: default (outline)"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Textarea
                    name="input_2"
                    value={args.input_2}
                    label="Variant: filled"
                    variant="filled"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Textarea
                    name="input_3"
                    value={args.input_3}
                    label="Variant: unstyled"
                    variant="unstyled"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Textarea
                    name="input_4"
                    value={args.input_4}
                    label="Variant: flushed"
                    variant="flushed"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Textarea
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
                <Textarea
                    name="input_6"
                    value={args.input_6}
                    size="sm"
                    label="Variant: reg size:sm"
                    variant="reg"
                    onChange={handleChange}
                    containerStyle={{pt: 2}}
                />
                <Textarea
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

export const Forms = args => (
    <Formik
        initialValues={{example: ''}}
        onSubmit={values => window.alert(JSON.stringify(values))}
        validationSchema={validateSchema}
    >
        <Form>
            <Field
                name="example"
                component={Textarea}
                variant="reg"
                label="Textarea"
                placeholder="Textarea"
                width="md"
                {...args}
            />
            <Button type="submit" variant="rounded" mt={8}>Submit</Button>
        </Form>
    </Formik>
);

Forms.parameters = parameters;
Forms.argTypes = argTypes;
