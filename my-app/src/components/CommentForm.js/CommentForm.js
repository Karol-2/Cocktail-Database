import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import randomId from "../../helper/randomId";

const CommentForm = ({ drinkid, setAdded }) => {
  const [message, setMessage] = useState("");
  const [added, setAddedState] = useState(true);
  const handleSubmit = (values, { resetForm }) => {
    values.id = randomId();
    fetch("http://localhost:5000/comment/add", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => setMessage("Success!"))
      .then(() => {
        setAddedState(!added);
        setAdded(!added);
      })

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
      initialValues={{ name: "", comment: "", drinkId: drinkid }}
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
          <div className="text-success">{message}</div>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
