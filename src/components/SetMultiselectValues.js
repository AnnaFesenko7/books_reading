import SelectBooks from './SelectBooks';
import { Field, ErrorMessage } from 'formik';
export { useState } from 'react';

const SetMultiselectValues = props => {
  const { name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}></label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <SelectBooks
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default SetMultiselectValues;
