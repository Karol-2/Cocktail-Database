import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { DrinkContext } from "../../contexts/DrinkBaseAPI";
import { RefreshDatabaseContext } from "../../contexts/RefreshAPI";

function DrinkEditForm() {
  const drinkbase = useContext(DrinkContext);
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);
  const { refreshData, setRefreshData } = useContext(RefreshDatabaseContext);

  const [selectedDrink, setSelectedDrink] = useState({});
  useEffect(() => {
    if (!selectedDrink._id) return;
    setSelectedDrink(
      drinkbase.find((drink) => drink._id === selectedDrink._id)
    );
  }, [drinkbase, selectedDrink._id]);

  const handleSubmit = (values, { resetForm }) => {
    const id = values._id;
    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        delete values[key];
      }
    });

    fetch(`http://localhost:5000/drinks/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(setMessage("Drink edited"))
      .then(setSend(() => !send))
      .then(resetForm())
      .then(setRefreshData(!refreshData))
      .then(
        setTimeout(() => {
          setMessage("");
        }, 1000)
      )
      .catch((err) => console.log(err));
  };
  const validate = (values) => {
    const urlRegex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    const dotRegex = /\./;
    const drinkExist = drinkbase.some(
      (drink) => drink.strDrink === values.strDrink
    );

    const errors = {};

    if (values.strDrink && drinkExist) {
      errors.strDrink =
        "There is already a drink with that name in the database!";
    }

    if (values.strInstructions && !dotRegex.test(values.strInstructions)) {
      errors.strInstructions = "Use sentences with '.' ";
    }

    if (values.strDrinkThumb && !urlRegex.test(values.strDrinkThumb)) {
      errors.strDrinkThumb = "Enter valid link";
    }

    return errors;
  };

  return (
    <div className="container">
      <h1>Edit a drink</h1>
      <h4>Write data only in places you want to change</h4>
      <select
        onChange={(e) => {
          const selected = drinkbase.find(
            (drink) => drink._id === e.target.value
          );
          setSelectedDrink(selected);
        }}
      >
        <option value="" disabled selected>
          Select a drink
        </option>
        {drinkbase.map((drink) => (
          <option key={drink._id} value={drink._id}>
            {drink.strDrink}
          </option>
        ))}
      </select>
      <Formik
        validate={validate}
        initialValues={{
          _id: "",
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
        {({ isSubmitting, errors }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="strAlcoholic">
                <b>Drink to edit</b>
              </label>
              <Field name="_id" as="select" className="form-control">
                <option value="">Select a drink</option>
                {drinkbase.map((drink) => (
                  <option key={drink._id} value={drink._id}>
                    {drink.strDrink}
                  </option>
                ))}
              </Field>
            </div>
            <div className="form-group">
              <label htmlFor="strDrink">Drink Name </label>
              <Field name="strDrink" type="text" className="form-control" />
              {errors.strDrink ? (
                <div style={{ color: "red" }}>{errors.strDrink}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strCategory">Category </label>
              <Field name="strCategory" type="text" className="form-control" />
              {errors.strCategory ? (
                <div style={{ color: "red" }}>{errors.strCategory}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strAlcoholic">Alcoholic </label>
              <Field name="strAlcoholic" as="select" className="form-control">
                <option value=""></option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non alcoholic">Non alcoholic</option>
                <option value="Optional alcohol">Optional alcohol</option>
              </Field>
            </div>
            <div className="form-group">
              <label htmlFor="strGlass">Glass type</label>
              <Field name="strGlass" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="strInstructions">
                Instructions (use complete sentences with periods!)
              </label>
              <Field
                name="strInstructions"
                type="text"
                className="form-control"
                placeholder={selectedDrink.strInstructions}
              />
              {errors.strInstructions ? (
                <div style={{ color: "red" }}>{errors.strInstructions}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strDrinkThumb">Drink Thumbnail </label>
              <Field
                name="strDrinkThumb"
                type="text"
                className="form-control"
              />
              {errors.strDrinkThumb ? (
                <div style={{ color: "red" }}>{errors.strDrinkThumb}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="strIngredient1">Ingredient 1</label>
              <Field
                name="strIngredient1"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="strMeasure1">Measure 1 </label>
              <Field name="strMeasure1" type="text" className="form-control" />
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
              Submit
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
export default DrinkEditForm;
