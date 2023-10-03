function Input({ label, name, type, onChange }) {
  return (
    <>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <div className="position-relative">
        <input
          type={type}
          name={name}
          id={label}
          className="form-control"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default Input;
