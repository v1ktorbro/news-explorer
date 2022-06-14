import React, { useEffect } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [isMinLengthError, setIsMinLengthError] = React.useState(false);
  const [isMaxLengthError, setIsMaxLengthError] = React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [inputValid, setInputValid] = React.useState(false);

  useEffect(() => {
    const regExForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setIsMinLengthError(true) : setIsMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'maxLength':
          value.length > validations[validation] ? setIsMaxLengthError(true) : setIsMaxLengthError(false);
          break;
        case 'isEmail':
          regExForEmail.test(String(value).toLowerCase()) ? setIsEmailError(false) : setIsEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isMinLengthError || isMaxLengthError || isEmailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isMinLengthError, isMaxLengthError, isEmailError]);

  return {
    isEmpty,
    isMinLengthError,
    isMaxLengthError,
    isEmailError,
    inputValid,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState(false);
  const [error, setError] = React.useState('');

  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
    setError(e.target.validationMessage);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    error,
    ...valid,
  };
};
