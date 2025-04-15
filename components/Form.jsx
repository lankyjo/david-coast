'use client'
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading]  = useState(false)

  const  handleChange  =  (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    const emptyFields = [];
    for (let field in formData) {
      if (!formData[field]) {
        emptyFields.push(field);
      }
    }

    // Show toast if fields are empty
    if (emptyFields.length > 0) {
      if (emptyFields.length > 1) {
        toast.error("Please fill all fields.");
      } else {
        toast.error(`${emptyFields[0]} is required.`);
      }
    } else {
      console.log(formData);
      setLoading(true)
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        toast.success(data.message);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
      
      toast.success("Form submitted successfully!");

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
      })
      setLoading(false)
    }
  };

  return (
    <>
      <div className="flex w-full h-dvh justify-center items-center">
        <form
          id="form"
          onSubmit={handleSubmit}
          className="max-w-lg w-full  mx-auto p-5 space-y-3 rounded-md border border-white/30"
        >
          <h2 className="font-anton text-center text-5xl uppercase">
            Sign up for the <br />
            <span className="text-[rgb(239_121_13)]">David Coast</span> <br />
            experience
          </h2>

          {[ 
            { label: "full name", input: "text", name: "fullName" },
            { label: "email", input: "email", name: "email" },
            { label: "phone Number", input: "tel", name: "phoneNumber" },
          ].map((item) => (
            <div id="formItem" className="flex flex-col" key={item.label}>
              <label className="capitalize" htmlFor={item.input}>
                {item.label}
              </label>
              <input
                className="border border-white/50 py-2 px-3 rounded-md hover:bg-white/5 duration-200 transition-all"
                id={item.input}
                type={item.input}
                name={item.name}
                value={formData[item.name]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button
            id="formItem"
            type="submit"
            disabled={loading}
            className="w-full py-2 px-6 rounded-md cursor-pointer hover:scale-101 transition-all"
            style={{ background: "rgb(239 121 13)" }}
          >
            {loading?<Loader/>: 'Submit'}
          </button>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default Form;
