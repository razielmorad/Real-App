import FormInput from "./forminput";
import PageHeader from "./pageheader";
import { useFormik } from "formik";
import Joi from "joi";
import formikValidateUsingJoi from "../utils/formikvalidateusingjoi";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCard, getAllCards, updateCard } from "../services/cardservice";
import UseMyCard from "../services/useCard";
import { useEffect } from "react";

const EditCard = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const { id } = useParams();
  const card = UseMyCard(id);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
    }),

    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
    
        await updateCard(id, body);
        toast("you have successfully edited a card! 🃏");
        navigate("/myCards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  useEffect(() => {
    if (!card) {
      return;
    }
    const { bizAddress, bizDescription, bizImage, bizName, bizPhone } = card;
    form.setValues({bizAddress, bizDescription, bizImage, bizName, bizPhone});
  }, [card]);

  return (
    <>
      <form onSubmit={form.handleSubmit} autoComplete="off" noValidate>
        <PageHeader title={"Edit a card"} description="" />
        {error && <div className="alert-danger alert text-center">{error}</div>}
        <FormInput
          required
          type="text"
          label="Name"
          error={form.touched.bizName && form.errors.bizName}
          {...form.getFieldProps("bizName")}
        />
        <FormInput
          required
          type="text"
          label="Description"
          error={form.touched.bizDescription && form.errors.bizDescription}
          {...form.getFieldProps("bizDescription")}
        />
        <FormInput
          required
          type="text"
          label="Address"
          error={form.touched.bizAddress && form.errors.bizAddress}
          {...form.getFieldProps("bizAddress")}
        />
        <FormInput
          required
          type="text"
          label="Phone"
          error={form.touched.bizPhone && form.errors.bizPhone}
          {...form.getFieldProps("bizPhone")}
        />
        <FormInput
          type="text"
          label="Image url"
          error={form.touched.bizImage && form.errors.bizImage}
          {...form.getFieldProps("bizImage")}
        />
        <button disabled={!form.isValid} type="submit" className="btn btn-dark">
          Edit a card
        </button>
      </form>
    </>
  );
};
export default EditCard;
