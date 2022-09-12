import Input from "./input";
import Button from "./button";

const NameForm = ({
  type,
  label,
  inputItem,
  handleSubmit,
  value,
  placeholder,
}) => {
  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        action="name"
        method="post"
      >
        <div className="mb-4">
          <Input
            htmlFor={inputItem}
            label={label}
            type={type}
            name={inputItem}
            id={inputItem}
            value={value}
            placeholder={placeholder}
          />
        </div>
        <Button btnName={"Submit"} type={"submit"} />
      </form>
    </div>
  );
};

export default NameForm;
