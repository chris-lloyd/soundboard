import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../schemaFormik";
import axios from "axios";
import { api } from "../../api";

const AddSoundContent = ({ refresh }: { refresh: Function }) => {
  // Validation schema using Yup

  // Initial values for the form fields
  const initialValues = {
    title: "",
    link: "",
    image: "",
  };

  // Handle form submission
  const handleSubmit = async (values: {
    title: string;
    link: string;
    image: string;
  }) => {
    // You can perform any action with the form values here (e.g., API call)
    const finalValues = {
      ...values,
      image: values.image
        ? values.image
        : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    };

    await axios.post(api.playlist, {
      ...finalValues,
    });

    refresh()
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="bg-white p-6 rounded-lg ">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="link"
                className="block text-sm font-medium text-gray-700"
              >
                Link
              </label>
              <Field
                type="text"
                id="link"
                name="link"
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="link"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image (optional)
              </label>
              <Field
                type="text"
                id="image"
                name="image"
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSoundContent;
