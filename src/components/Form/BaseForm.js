import React from 'react';
import {Formik} from 'formik';
import {formRef} from '../ref';

const BaseForm = ({
  innerRef,
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...otherProps
}) => (
  <Formik
    innerRef={innerRef ? innerRef : formRef}
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    {...otherProps}>
    {() => children}
  </Formik>
);

export {BaseForm};
