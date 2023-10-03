import React, { useEffect, useState } from "react";
import "../aboutLogin/Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const cateUrl = "https://localhost:7007/api/Categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getActivityCate();
  }, []);

  const getActivityCate = async () => {
    const res = await axios.get(cateUrl);
    setCategories(res.data);
  };
  return (
    <>
      <div className="main_user_login">
        <Link to="/UserLogin" className="user_login">
          <span className="rounded">
            <i className="fa-regular fa-user"></i>
          </span>
          <span>Üye Girişi</span>
        </Link>
        <Link to="/login" className="login">
          <span className="rounded">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </span>
          <span>Üye Ol</span>
        </Link>
      </div>
      <nav id="offcanvas" className="navbar fixed-top d-none ">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light " type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-body-secondary"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
                <Link className="text-decoration-none" to="/">
                  Anasayfa
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className="main-user-login mb-3">
                  <Link to="/userlogin" className="user_login">
                    <span className="rounded">
                      <i className="fa-regular fa-user me-2"></i>
                    </span>
                    <span>Üye Girişi</span>
                  </Link>
                  <Link to="/login" className="login">
                    <span className="rounded">
                      <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                    </span>
                    <span>Üye Ol</span>
                  </Link>
                </div>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kategoriler
                  </Link>
                  <ul className="dropdown-menu">
                    {categories.map((category) => (
                      <li>
                        <Link
                          id={category.id}
                          className="dropdown-item"
                          to={`/activitybycategory/${category.id}`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                    {/* <li>
                      <Link className="dropdown-item" to="#">
                        Müzik
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Sahne
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Spor
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Aile
                      </Link>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LoginPage;
