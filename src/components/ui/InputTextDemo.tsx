import { InputText, InputTextProps } from "primereact/inputtext";

const InputTextDemo = ({
  label,
  id,
  ...props
}: InputTextProps & { label: string; id: string }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <InputText id={id} {...props} />
    </div>
  );
};

export default InputTextDemo;
