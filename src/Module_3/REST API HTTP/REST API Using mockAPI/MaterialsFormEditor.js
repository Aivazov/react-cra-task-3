import { Formik, Form, Field } from 'formik';
import './MaterialsFormEditor.css';

export const MaterialsFormEditor = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', avatar: '' }} onSubmit={handleSubmit}>
      <Form className='form-input'>
        <label>
          Description
          <Field name="name" type="text" className="name-input" />
        </label>
        <label>
          Link
          <Field name="avatar" type="text" />
        </label>
        <button type="submit">Add material</button>
      </Form>
    </Formik>
  );
};
