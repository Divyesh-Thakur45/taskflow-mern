import React from "react";

const AuthForm = ({
  title,
  fields,
  buttonText,
  handleChange,
  handleSubmit,
  formData,
}) => {
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
