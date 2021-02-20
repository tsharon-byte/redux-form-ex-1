import React from "react";
import { Field, reduxForm } from "redux-form";

const MyForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" type="text" component="input" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" type="email" component="input" />
    </div>
    <button type="submit">Submit</button>
  </form>
);
const Form = reduxForm({
  // a unique name for the form
  form: "contact",
})(MyForm);
export default Form;
