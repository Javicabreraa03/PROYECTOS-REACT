import { useState } from "react";
import "./FormInput.css";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  name,
  label,
  value,
  errorMessage,
  handleChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(false);
  };

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="form-input__textarea"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-focused={focused.toString()}
        {...props}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormTextarea;