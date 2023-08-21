import { Form } from "./plugins/regLog.js";

const form = new Form("#form-area", {
  width: "500px",
  email: {
    title: "Email address",
    placeholder: "Email or username",
  },
  password: {
    title: "Password",
    placeholder: "Enter Password",
  },
  formRemember: {
    checkbox: true,
    forgot: true,
  },
  button: {
    text: "sign in",
    handler: () => console.log("Data has been sent"),
  },
});
