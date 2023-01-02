import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap/";
import "./Registration.scss";

function RegistrationForm(props) {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
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
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
          />
          <ErrorMessage name="email" component="div" className="error" />
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
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
