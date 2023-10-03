import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../aboutLogin/Login.css";

function UserLogin() {
  const url = "https://localhost:7007/api/Register/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const Login = () => {
    axios
      .post(url, {
        Email: email,
        Password: password,
      })
      .then((response) => {
        setLoginStatus(true);
      })
      .catch((err) => {
        setLoginStatus(err.data);
      });
  };

  return (
    <>
      <div className="container">
        <div id="login-acount">
          {loginStatus ? (
            <div
              className={
                loginStatus === true ? "alert alert-success " : "d-none"
              }
              role="alert"
            >
              Giriş başarılı
            </div>
          ) : (
            <>
              <div
                className={
                  loginStatus == false ? "d-none" : "alert alert-warning"
                }
                role="alert"
              >
                Hatalı giriş
              </div>
            </>
          )}

          <h2 className="mb-3 text-center mt-4">Giriş Yap</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action=""
          >
            <div className="row">
              <div className="col-md-12">
                <div className="position-relative">
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control mb-3"
                  />
                  <i className="fa-regular fa-envelope" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="position-relative">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Şifre"
                    className="form-control"
                  />
                  <i className="fa-solid fa-unlock" />
                </div>
              </div>
              <div className="row d-flex justify-content-center align-items-center mt-3">
                <div className="col-sm-12 col-md-6 activation-link">
                  <Link
                    onClick={Login}
                    to={loginStatus === true ? "/" : { Login }}
                    className="btn btn-primary"
                  >
                    Giriş Yap
                  </Link>
                </div>
                <div className="col-md-6 remember-password">
                  <Link to="">Şifremi unuttum</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
