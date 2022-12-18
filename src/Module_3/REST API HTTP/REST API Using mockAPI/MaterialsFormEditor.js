import { Formik, Form, Field } from 'formik';
import './MaterialsFormEditor.css';

export const MaterialsFormEditor = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', avatar: '' }} onSubmit={handleSubmit}>
      {/* {({isSubmitting}) => ( */}
      <Form className="form-input">
        <label>
          Description
          <Field name="name" type="text" className="name-input" required />
        </label>
        <label>
          Link
          <Field name="avatar" type="text" className="name-input" required />
        </label>
        <button type="submit" disabled={isSubmitting}>
          Add material
        </button>
      </Form>
      {/* )
      } */}
    </Formik>
  );
};
