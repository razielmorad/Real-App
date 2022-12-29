const FormInput = ({ name, error, label, ...rest }) => {
  return (
    <div className="form-group my-1">
      <label className="mx-2" htmlFor={name}>
        {label} {rest.required && <span className="text-danger my-1 ">*</span>}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <span className="invalid-feedback">{error}</span>
    </div>
  );
};
export default FormInput;
