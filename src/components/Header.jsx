import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/aboutLogin/Header.css";
import axios from "axios";
import LoginPage from "../pages/aboutLogin/LoginPage";
import UserLogin from "../pages/aboutLogin/UserLogin";
import UserHeader from "./UserHeader";
import { useSelector } from "react-redux";

function Header({ basket }) {
  const cateUrl = "https://localhost:7007/api/Categories";
  const { loginStatus } = useSelector((state) => state.loginStore);

  const [categories, setCategories] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    getActivityCate();
  }, []);

  const getActivityCate = async () => {
    const res = await axios.get(cateUrl);
    setCategories(res.data);
  };

  return (
    <>
      {/*-- main navigation --*/}
      <header className="container-fluid">
        <nav className="navbar">
          <div id="main-container">
            <div id="main-nav">
              <Link
                id="logo"
                className="navbar-brand text-info me-0 fs-4"
                to="/"
              >
                Bi
                <span className="fs-6 text-white ms-1">
                  MO <strong className="fs-4 text-dark">LA</strong>
                </span>
              </Link>
              <div id="main-categories">
                <ul id="main-header-categories">
                  {categories.map((category) => (
                    <li>
                      <Link
                        id={category.id}
                        className="main-header-category"
                        to={`/activitybycategory/${category.id}`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <form id="main-form" className="d-flex" role="search">
              <input
                onChange={(e) => setquery(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Sanatçı ya da etkinlik adı giriniz..."
                aria-label="Search"
              />
              <Link
                to={setquery === null ? "/" : `/searchResult/${query}`}
                className="btn btn-outline-light"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </Link>
            </form>
            {loginStatus ? <UserHeader basket={basket} /> : <LoginPage />}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
