import axios from "axios";
import React, { useState, useEffect } from "react";
import "../navigation/Navigation.css";

function Navigation() {
  const url = "https://localhost:7007/api/Categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await axios.get(url);
    setCategories(res.data);
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* categories details */}
      <div id="mainheader_discover">
        <div className="container">
          <div className="row position-relative">
            <div className="col-md-4 d-flex justify-content-center">
              <label className="discoverbar_label" htmlFor="">
                <i className="fa-solid fa-eye" />
                <span>KEŞFET</span>
              </label>
              <select
                onChange={onChangeHandler}
                name=""
                id=""
                className="discoverbar_select"
              >
                <option value={-1} selected="selected">
                  Tüm Kategoriler
                </option>
                {categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <label className="discoverbar_label" htmlFor="">
                <i className="fa-regular fa-calendar" />
                <span>TARİH</span>
              </label>
              <select name="" id="" className="discoverbar_select">
                <option value={-1} selected="selected">
                  Tüm Tarihler
                </option>
                <option value="today">BUGÜN</option>
                <option value="weekend">HAFTA SONU</option>
                <option value="next14days">ÖNÜMÜZDEKİ 14 GÜN</option>
                <option value="next30days">ÖNÜMÜZDEKİ 30 GÜN</option>
              </select>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <label className="discoverbar_label" htmlFor="">
                <i className="fa-solid fa-location-dot" />
                <span>YER</span>
              </label>
              <select name="" id="" className="discoverbar_select">
                <option value={-1} selected="selected">
                  İSTANBUL
                </option>
                <option value="MUSİC">İZMİR</option>
                <option value="ART">ANKARA</option>
              </select>
            </div>
            <button
              id="mainheader_discover_btn"
              className="btn btn-outline-secondary position-absolute top-0"
              type="submit"
            >
              GİT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
