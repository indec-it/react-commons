import * as yup from 'yup';

export default yup.object({
  username: yup.string().required('Debe ingresar su nombre de usuario.'),
  password: yup.string().required('Debe ingresar su contraseña.')
});
