import React from "react";
import { Form } from "./components";
function App() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Form onSubmit={submit} />
    </div>
  );
}

export default App;
