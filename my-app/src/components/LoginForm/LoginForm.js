import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap/";
import "./Login.scss";

function RegistrationForm(props) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }

        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        }

        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // submitowanie danych tutaj
          console.log(values);
          props.submitData(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="form-input"
          />
          <ErrorMessage name="username" component="div" className="error" />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="form-input"
          />
          <ErrorMessage name="password" component="div" className="error" />
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="form-input"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error"
          />
          <Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
