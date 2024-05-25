import React, { Component } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Eventtable from "./eventtable";

const Form = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  const [data, setdata] = useState(null);

  const onSubmit = (data) => {
    console.log("Data submitted", data);
    const queryString = `?keyword=${data.keyword}&distance=${data.distance}&category=${data.category}&location=${data.location}`;

    fetch(`http://localhost:9000/getdata${queryString}`)
      .then((response) => response.json())
      .then((response_data) => {
        setdata(response_data);
        // Handle the response data
        console.log(response_data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="container">
        <div className="row formtag justify-content-center" style={{ margin: 'auto' }}>
          <div className="col-12 col-lg-12 col-sm-12">
            <h1 className="heading">Event Search</h1>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12 col-lg-12 col-sm-12">
                <label htmlFor="keyword" className="form-label">
                  Keyword
                </label>
                <input
                  type="text"
                  {...register("keyword")}
                  className="form-control"
                />
              </div>

              <div className="col-6 col-lg-6 col-sm-12">
                <label htmlFor="distance" className="form-label">
                  Distance
                </label>
                <input
                  type="number"
                  className="form-control"
                  {...register("distance")}
                />
              </div>

              <div className="col-6 col-lg-6 col-sm-12">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  {...register("category")}
                  className="form-select mb-3"
                >
                  <option value="Default">Default</option>
                  <option value="Music">Music</option>
                  <option value="Sports">Sports</option>
                  <option value="Arts & Theatre">Arts & Theatre</option>
                  <option value="Film">Film</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </select>
              </div>

              <div className="col-12 col-lg-12 col-sm-12">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location")}
                  className="form-control"
                />
              </div>

              <div className="col-lg-12 col-sm-12">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  name="auto-detect"
                  id="auto-detect"
                />
                <label htmlFor="auto-detect" className="form-check-label mb-3">
                  Auto-detect your location
                </label>
              </div>

              <div className="row justify-content-center">
                <div className="col-4 col-lg-2 col-sm-2">
                  <button type="submit" className="btn btn-danger">
                    SUBMIT
                  </button>
                </div>
                <div className="col-4 col-lg-2 col-sm-2">
                  <button type="button" className="btn btn-primary">
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      {data && <Eventtable pass={data} />}
    </div>
  );
};

export default Form;
