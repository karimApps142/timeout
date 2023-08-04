import React from 'react';

export const formRef = React.createRef();

const resetForm = () => formRef.current?.resetForm();

const setValues = values =>
  formRef.current?.setValues({
    ...formRef.current.values,
    ...values,
  });

const getFieldProps = fieldName =>
  formRef.current?.getFieldProps(fieldName).value;

const handleCheckValidity = async () => {
  const errors = await formRef?.current.validateForm();
  if (Object.keys(errors).length === 0 || errors['variations']) {
    return true;
  } else {
    return false;
  }
};

export default {
  resetForm,
  setValues,
  getFieldProps,
  handleCheckValidity,
};
