import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import randomId from "../../helpers/randomId";

const CommentForm = ({ drinkid, setAdded }) => {
  const [message, setMessage] = useState("");
  const [added, setAddedState] = useState(true);

  const handleSubmit = async (values, formikBag) => {
    try {
      values.id = randomId();
      const res = await fetch("http://localhost:5000/comment/add", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      setMessage("Success!");
      setAddedState(!added);
      setAdded(!added);
      formikBag.resetForm();
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
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
      initialValues={{ name: "", comment: "", drinkId: drinkid }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <Field
              className="form-control"
              name="name"
              type="text"
              placeholder="Username"
            />
            {errors.name && touched.name ? (
              <div className="text-danger">{errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Your opinion:</label>
            <Field
              className="form-control"
              name="comment"
              type="text"
              placeholder="Your opinion..."
            />
            {errors.comment && touched.comment ? (
              <div className="text-danger">{errors.comment}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="text-success">{message}</div>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
