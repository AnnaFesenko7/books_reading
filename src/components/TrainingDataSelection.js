import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import FormikControl from './FormikControl';
import 'react-datepicker/dist/react-datepicker.css';
// import { useState } from 'react';
// import TrainingBooksList from './TrainingBooksList ';

const StyledControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const booksOptions = [
  { id: 1, title: 'book1' },
  { id: 2, title: 'book2' },
  { id: 3, title: 'book3' },
  { id: 4, title: 'book4' },
  { id: 5, title: 'book5' },
];

const TrainingDataSelection = ({ onStartTraining }) => {
  const initialValues = {
    startDate: null,
    endDate: null,
    selectedBooks: [],
  };

  // const [booksList, setBooksList] = useState([]);

  // const addBookToList = book => {
  //   console.log('booksList1', booksList);

  //   setBooksList(prevBooksList => {
  //     prevBooksList.push(book);
  //     return prevBooksList;
  //   });
  //   console.log('booksList', booksList);
  // };

  const validationSchema = Yup.object({
    startDate: Yup.date().required('required'),
    endDate: Yup.date().required('required'),
    selectedBooks: Yup.array().required('required'),
  });

  const onSubmit = values => {
    console.log('Form data', values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <StyledControlsWrapper>
            <FormikControl control="data" label="Початок" name="startDate" />
            <FormikControl control="data" label="Завершення" name="endDate" />
          </StyledControlsWrapper>
          <FormikControl
            control="multiselect"
            name="selectedBooks"
            options={booksOptions}
          />

          <button onSubmit={onSubmit} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TrainingDataSelection;