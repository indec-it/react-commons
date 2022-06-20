import {getIn} from 'formik';

const getError = (form, field) => {
    if (!form || !field) {
        return undefined;
    }
    const fieldTouched = getIn(form.touched, field.name);
    const backendError = getIn(form.status, field.name);
    const clientError = getIn(form.errors, field.name);
    if (clientError && Object.entries(clientError).length > 0 && fieldTouched) {
        return clientError;
    }
    if (backendError && Object.entries(backendError).length === 0 && !fieldTouched) {
        return backendError;
    }
    return undefined;
};

export default getError;
