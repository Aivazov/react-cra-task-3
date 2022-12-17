import { Formik, Form, Field } from 'formik';

export const MaterialsFormEditor = () => {
  return (
    <Formik initialValues={{ name: '', avatar: '' }}>
      <Form />
    </Formik>
  );
};
