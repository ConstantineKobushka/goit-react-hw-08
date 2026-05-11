import { useId } from 'react';

import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { apiLoginUser } from '../../redux/auth/operations';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalide email address')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Password length must be at least 7 characters')
      .required('Password is required'),
  });

  const onFormSubmit = (values, actions) => {
    dispatch(apiLoginUser(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onFormSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={emailId}>
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
          Sing In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
