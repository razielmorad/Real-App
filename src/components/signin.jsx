import FormInput from "./forminput";
import PageHeader from "./pageheader";
import { useFormik } from "formik";
import joi from "joi";
import formikValidateUsingJoi from "../utils/formikvalidateusingjoi";

import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [error, setError] = useState(null);
  const { logIn: logInUser } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: joi
        .string()
        .min(2)
        .max(256)
        .required()
        .email({ tlds: { allow: false } }),
      password: joi.string().min(2).max(256).required(),
    }),
    async onSubmit(values) {
      try {
        await logInUser(values);
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
        console.log(error);
      }
    },
  });
  return (
    <>
      <PageHeader title={"Sign In"} description="sign in to your account" />
      {error && <div className="alert-danger alert text-center">{error}</div>}
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <FormInput
          required
          type="text"
          name={"email"}
          label="Email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
        />
        <FormInput
          required
          type="password"
          name={"password"}
          label="Password"
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps("password")}
        />
        <button className="btn btn-dark rounded-2" type="submit">
          Log In{" "}
        </button>
      </form>
    </>
  );
};
export default SignIn;
