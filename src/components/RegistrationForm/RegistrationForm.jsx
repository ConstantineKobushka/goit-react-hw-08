import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { apiRegisterUser } from '../../redux/auth/operations';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalide email address')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Password length must be at least 7 characters')
      .required('Password is required'),
  });

  const onFormSubmit = (values, actions) => {
    dispatch(apiRegisterUser(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onFormSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={styles.input}
          type="text"
          name="name"
          id={nameId}
          placeholder="Name Lastname"
        />
        <ErrorMessage className={styles.error} name="name" component="span" />
        <label
          className={`${styles.label} ${styles.labelItem}`}
          htmlFor={emailId}
        >
          Email
        </label>
        <Field
          className={styles.input}
          type="text"
          name="email"
          id={emailId}
          placeholder="example.email@example.com"
        />
        <ErrorMessage className={styles.error} name="email" component="span" />
        <label
          className={`${styles.label} ${styles.labelItem}`}
          htmlFor={passwordId}
        >
          Password
        </label>
        <Field
          className={styles.input}
          type="password"
          name="password"
          id={passwordId}
          placeholder="Password"
        />
        <ErrorMessage
          className={styles.error}
          name="password"
          component="span"
        />
        <button className={styles.btn} type="submit">
          Sing Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
