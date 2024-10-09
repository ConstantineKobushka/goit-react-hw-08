import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAddContact(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  return (
    <Formik
      className={styles.form}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <Field className={styles.input} type='text' name='name' />
        <ErrorMessage className={styles.error} name='name' component='span' />
        <Field className={styles.input} type='number' name='number' />
        <ErrorMessage className={styles.error} name='number' component='span' />
        <button className={styles.formbtn} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
