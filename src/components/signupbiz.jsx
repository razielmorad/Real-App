import FormInput from "./forminput";
import PageHeader from "./pageheader";
import { useFormik } from "formik";
import joi from "joi";
import formikValidateUsingJoi from "../utils/formikvalidateusingjoi";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpBiz = () => {
  const navigate = useNavigate();
  const { createUser, logIn } = useAuth();
  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      name: joi.string().min(2).max(256).required(),
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
        await createUser({ ...values, biz: true });
        await logIn({ email: values.email, password: values.password });
        toast("you have successfully created a user! 😎");
        navigate("/myCards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <form onSubmit={form.handleSubmit} autoComplete="off" noValidate>
        <PageHeader title={"Sign Up"} description="it's free!" />
        {error && <div className="alert-danger alert text-center">{error}</div>}
        <FormInput
          required
          type="text"
          name={"name"}
          label="Name"
          error={form.touched.name && form.errors.name}
          {...form.getFieldProps("name")}
        />
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
        <button type="submit" className="btn btn-dark">
          Sign Up
        </button>
      </form>
    </>
  );
};
export default SignUpBiz;
