import React from "react";
import "../pages/aboutLogin/Header.css";
import { Link } from "react-router-dom";

function UserHeader({ basket }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <h5 className="me-3 mb-0 text-white">Hoşgeldiniz</h5>
        <a className="text-decoration-none text-white" href="">
          <span className="rounded fs-5">
            <i className="fa-solid fa-basket-shopping rounded" />
          </span>
          <Link
            to="/basket"
            className="fs-5 ms-2 text-decoration-none text-white"
          >
            Sepetim ({basket.length})
          </Link>
        </a>
      </div>
      <nav id="offcanvas" className="navbar bg-body-secondary fixed-top d-none">
        <div className="container-fluid">
          <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header pb-0">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <a className="text-decoration-none fs-4 fw-bold" href="">
                  Merhaba
                </a>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body pt-0">
              <hr />
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className="">
                  <li>
                    <a
                      className="text-decoration-none fw-bold text-black fs-5"
                      href=""
                    >
                      Profilim
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      className="text-decoration-none fw-bold text-black fs-5"
                      href=""
                    >
                      Adreslerim
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      className="text-decoration-none fw-bold text-black fs-5"
                      href=""
                    >
                      Biletlerim
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      className="text-decoration-none fw-bold text-black fs-5"
                      href=""
                    >
                      Çıkış
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserHeader;
