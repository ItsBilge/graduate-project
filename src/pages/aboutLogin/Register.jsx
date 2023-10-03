import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FromInput from "../../components/formInput/FromInput";

function Login() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "ad soyad",
      errorMessage: "ad soyad alanı boş geçilemez",
      label: "Ad Soyad",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "geçerli bir e-mail adresi giriniz",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "doğum tarihi",
      label: "Doğum Tarihi",
    },
    {
      id: 4,
      name: "phone",
      type: "number",
      placeholder: "Telefon Numarası",
      errorMessage: "Geçerli telefon numarası giriniz",
      label: "Telefon Numarası",
      required: true,
      max: "9999999999",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "şifre",
      errorMessage: "şifre alanı boş geçilemez",
      label: "Şifre",
      // pattern: `^(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z!@#$%^&*()_+]{4,8}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Şifre Tekrar",
      errorMessage: "şifreler uyuşmuyor!",
      label: "Şifre Tekrar",
      required: true,
      pattern: values.password,
    },
  ];

  const postUrl = "https://localhost:7007/api/Register/register";
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const resp = await axios.post(postUrl, {
        fullname: values.fullname,
        email: values.email,
        Birthdate: values.birthday,
        phone: values.phone,
        password: values.password,
        RePassword: values.confirmPassword,
      });
      setSuccess(true);
      console.log(resp.data);
    } catch (error) {}
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    if (setSuccess(false)) {
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>;
    }
  };
  return (
    <>
      <div className="container">
        <div id="create-acount">
          {success ? (
            <section className="mt-5 p-5 bg-">
              <div class="alert alert-success" role="alert">
                Hesap oluşturuldu!
              </div>
              <Link to="/userlogin" className="btn btn-primary">
                Giriş Yap
              </Link>
            </section>
          ) : (
            <>
              <h2 className="mb-3 text-center mt-4">Hesap Oluştur</h2>
              <div className="container row">
                <div className="col-md-12 col-xsm-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(values);
                    }}
                  >
                    {inputs.map((input) => (
                      <FromInput
                        key={input.id}
                        {...input}
                        value={values.name}
                        onChange={onChange}
                      />
                    ))}
                    <div className="col-md-12 mt-5 d-flex justify-content-center align-items-center">
                      <button
                        onClick={onClick}
                        type="submit"
                        className="btn btn-outline-primary"
                      >
                        Hesap Oluştur
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
