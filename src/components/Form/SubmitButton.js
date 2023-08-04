import {useFormikContext} from 'formik';
import React from 'react';
import {BaseButton} from '../SharedComponents/BaseButton';

export const SubmitButton = ({...otherProps}) => {
  const {handleSubmit} = useFormikContext();
  return <BaseButton {...otherProps} onPress={handleSubmit} />;
};
