import React from 'react';
import {Field, Formik, Form} from 'formik';

import Button from '../Button.jsx';
import ErrorMessage from '../ErrorMessage.jsx';
import TextField from '../Field.jsx';
import loginSchema from '../../schemas/login';

export default function LoginForm({onLogin, isLoging, error}) {
  return (
    <Formik initialValues={{username: '', password: ''}} validationSchema={loginSchema} onSubmit={onLogin}>
      <Form>
        <div className="flex flex-col gap-6">
          <Field name="username">
            {({field, meta}) => (
              <TextField
                {...field}
                label="Usuario *"
                placeholder="usuario@indec.gob.ar"
                error={meta.touched && meta.error ? meta.error : null}
              />
            )}
          </Field>
          <Field name="password">
            {({field, meta}) => (
              <TextField
                {...field}
                type="password"
                label="Contraseña *"
                placeholder="123456"
                error={meta.touched && meta.error ? meta.error : null}
              />
            )}
          </Field>
          <Button type="submit" data-testid="login-button" disabled={isLoging} label="Ingresar" />
          {error && <ErrorMessage error={error.status === 401 ? 'Credenciales incorrectas.' : 'Ha ocurrido un error.'} />}
        </div>
      </Form>
    </Formik>
  );
}
