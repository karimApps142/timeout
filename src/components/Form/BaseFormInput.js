import {useFormikContext} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {BaseInput} from '../SharedComponents/BaseInput';
import {ErrorMessage} from './ErrorMessage';

export const BaseFormInput = ({name, onValueChanged, ...otherProps}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();
  return (
    <View>
      <BaseInput
        {...otherProps}
        onChangeText={
          name === 'phone' ||
          name === 'email' ||
          name === 'password' ||
          name === 'password_confirmation'
            ? val => setFieldValue(name, val.trim())
            : handleChange(name)
        }
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};
