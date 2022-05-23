import {getIn} from 'formik';
import isEmpty from 'lodash/isEmpty';

const getError = (form, field) => {
    if (!form || !field) {
        return undefined;
    }
    const fieldTouched = getIn(form.touched, field.name);
    const backendError = getIn(form.status, field.name);
    const clientError = getIn(form.errors, field.name);
    if (!isEmpty(clientError) && fieldTouched) {
        return clientError;
    }
    if (isEmpty(backendError) && !fieldTouched) {
        return backendError;
    }
    return undefined;
};

export default getError;
