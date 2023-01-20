import React, { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import AddFromFile from "../AddFromFile.js/AddFromFile";
import { RefreshDatabaseContext } from "../../contexts/RefreshAPI";
import { DrinkContext } from "../../contexts/DrinkBaseAPI";

function DrinkAddForm() {
  const [send, setSend] = useState(false);
  const [message, setMessage] = useState("");
  const { refreshData, setRefreshData } = useContext(RefreshDatabaseContext);
  const drinknames = useContext(DrinkContext).map((drink) =>
    drink.strDrink.toLowerCase()
  );

  const handleSubmit = (values, formikBag) => {
    fetch("http://localhost:5000/drinks/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(setMessage("Drink added"))
      .then(() => formikBag.resetForm())
      .then(setSend(() => !send))
      .then(setRefreshData(!refreshData))
      .then(
        setTimeout(() => {
          setMessage("");
        }, 2000)
      )
      .catch((err) => console.log(err));
  };

  const validate = (values) => {
    const urlRegex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    const dotRegex = /\./;

    const errors = {};
    if (!values.strDrink) {
      errors.strDrink = "Required";
    }
    if (drinknames.includes(values.strDrink.toLowerCase())) {
      errors.strDrink =
        "There is already a drink with that name in the database!";
    }

    if (!values.strCategory) {
      errors.strCategory = "Required";
    }
    if (!values.strAlcoholic) {
      errors.strAlcoholic = "Required";
    }
    if (values.strAlcoholic === "SELECT") {
      errors.strAlcoholic = "Select drink type";
    }
    if (!values.strGlass) {
      errors.strGlass = "Required";
    }
    if (!values.strInstructions) {
      errors.strInstructions = "Required";
    }
    if (!dotRegex.test(values.strInstructions)) {
      errors.strInstructions = "Use sentences with '.' ";
    }
    if (values.strInstructions.lenght < 10) {
      errors.strInstructions = "At least 10 characters";
    }
    if (!values.strDrinkThumb) {
      errors.strDrinkThumb = "Required";
    }
    if (!urlRegex.test(values.strDrinkThumb)) {
      errors.strDrinkThumb = "Enter valid link";
    }
    if (!values.strIngredient1) {
      errors.strIngredient1 = "Required";
    }
    if (!values.strMeasure1) {
      errors.strMeasure1 = "Required";
    }
    return errors;
  };

  return (
    <div className="container">
      <h1>Add a New Drink</h1>
      <AddFromFile />
      <Formik
        validate={validate}
        initialValues={{
          strDrink: "",
          strCategory: "",
          strAlcoholic: "",
          strGlass: "",
          strInstructions: "",
          strDrinkThumb: "",
          strIngredient1: "",
          strIngredient2: "",
          strIngredient3: "",
          strIngredient4: "",
          strIngredient5: "",
          strIngredient6: "",
          strIngredient7: "",
          strIngredient8: "",
          strIngredient9: "",
          strIngredient10: "",
          strIngredient11: "",
          strMeasure1: "",
          strMeasure2: "",
          strMeasure3: "",
          strMeasure4: "",
          strMeasure5: "",
          strMeasure6: "",
          strMeasure7: "",
          strMeasure8: "",
          strMeasure9: "",
          strMeasure10: "",
          strMeasure11: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="strDrink">Drink Name *</label>
              <Field
                name="strDrink"
                type="text"
                className="form-control"
                required
              />
              {errors.strDrink && touched.strDrink ? (
                <div style={{ color: "red" }}>{errors.strDrink}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strCategory">Category *</label>
              <Field
                name="strCategory"
                type="text"
                className="form-control"
                required
              />
              {errors.strCategory && touched.strCategory ? (
                <div style={{ color: "red" }}>{errors.strCategory}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strAlcoholic">Alcoholic *</label>
              <Field
                name="strAlcoholic"
                as="select"
                className="form-control"
                required
              >
                <option vaule="SELECT">SELECT</option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non alcoholic">Non alcoholic</option>
                <option value="Optional alcohol">Optional alcohol</option>
              </Field>
              {errors.strAlcoholic && touched.strAlcoholic ? (
                <div style={{ color: "red" }}>{errors.strAlcoholic}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strGlass">Glass *</label>
              <Field
                name="strGlass"
                type="text"
                className="form-control"
                required
              />
              {errors.strGlass && touched.strGlass ? (
                <div style={{ color: "red" }}>{errors.strGlass}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strInstructions">
                Instructions (use complete sentences with periods!) *
              </label>
              <Field
                name="strInstructions"
                type="text"
                className="form-control"
                required
              />
              {errors.strInstructions && touched.strInstructions ? (
                <div style={{ color: "red" }}>{errors.strInstructions}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strDrinkThumb">
                Drink Thumbnail (link to photo) *
              </label>
              <Field
                name="strDrinkThumb"
                type="text"
                className="form-control"
                required
              />
              {errors.strDrinkThumb && touched.strDrinkThumb ? (
                <div style={{ color: "red" }}>{errors.strDrinkThumb}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient1">Ingredient 1 *</label>
              <Field
                name="strIngredient1"
                type="text"
                className="form-control"
                required
              />
              {errors.strIngredient1 && touched.strIngredient1 ? (
                <div style={{ color: "red" }}>{errors.strIngredient1}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure1">Measure 1 *</label>
              <Field
                name="strMeasure1"
                type="text"
                className="form-control"
                required
              />
              {errors.strMeasure1 && touched.strMeasure1 ? (
                <div style={{ color: "red" }}>{errors.strMeasure1}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient2">Ingredient 2</label>
              <Field
                name="strIngredient2"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure2">Measure 2</label>
              <Field name="strMeasure2" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient3">Ingredient 3</label>
              <Field
                name="strIngredient3"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure3">Measure 3</label>
              <Field name="strMeasure3" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient4">Ingredient 4</label>
              <Field
                name="strIngredient4"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure4">Measure 4</label>
              <Field name="strMeasure4" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient5">Ingredient 5</label>
              <Field
                name="strIngredient5"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure5">Measure 5</label>
              <Field name="strMeasure5" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient6">Ingredient 6</label>
              <Field
                name="strIngredient6"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure6">Measure 6</label>
              <Field name="strMeasure6" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient7">Ingredient 7</label>
              <Field
                name="strIngredient7"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure7">Measure 7</label>
              <Field name="strMeasure7" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient8">Ingredient 8</label>
              <Field
                name="strIngredient8"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure8">Measure 8</label>
              <Field name="strMeasure8" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient9">Ingredient 9</label>
              <Field
                name="strIngredient9"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure9">Measure 9</label>
              <Field name="strMeasure9" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient10">Ingredient 10</label>
              <Field
                name="strIngredient10"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure10">Measure 10</label>
              <Field name="strMeasure10" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient11">Ingredient 11</label>
              <Field
                name="strIngredient11"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure11">Measure 11</label>
              <Field name="strMeasure11" type="text" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-success">
        <h1>{message}</h1>
      </div>
    </div>
  );
}
export default DrinkAddForm;
