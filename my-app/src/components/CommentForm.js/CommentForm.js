import React from "react";
import { Formik, Form, Field } from "formik";
import useId from "react-use-uuid";

const CommentForm = ({ drinkid }) => {
  const id = useId();
  const handleSubmit = (values, { resetForm }) => {
    fetch("http://localhost:5000/comment/add", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    resetForm({});
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Username is required";
    }
    if (!values.comment) {
      errors.comment = "Some comment is required";
    }
    return errors;
  };
  return (
    <Formik
      initialValues={{ name: "", comment: "", id: id, drinkId: drinkid }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="name" type="text" placeholder="Username" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <Field name="comment" type="text" placeholder="Your opinion..." />
          {errors.comment && touched.comment ? (
            <div>{errors.comment}</div>
          ) : null}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
