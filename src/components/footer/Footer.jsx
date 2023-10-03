import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";

function Footer() {
  return (
    <footer id="footer" className="card-footer">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-4">
            <Link className="navbar-brand text-info me-0 fs-4" to="/">
              Bi
              <span className="fs-6 text-white ms-1">
                MO <strong className="fs-4 text-dark">LA</strong>
              </span>
            </Link>
            <h5 className="mt-3">Bizi takip edin</h5>
            <ul className="social d-flex">
              <li>
                <Link to="" className="social_link">
                  <i className="fa-brands fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="" className="social_link">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="" className="social_link">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
              <li>
                <Link to="" className="social_link">
                  <i className="fa-brands fa-spotify" />
                </Link>
              </li>
              <li>
                <Link to="" className="social_link">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Hakkımızda</h4>
            <ul className="about_us mt-3">
              <li>
                <Link to="">Biz kimiz</Link>
              </li>
              <li>
                <Link to="">Kurum Politikalarımız</Link>
              </li>
              <li>
                <Link to="">Kullanıcı sözleşmesi</Link>
              </li>
              <li>
                <Link to="">İletişim</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Bizimle Çalışın</h4>
            <ul className="about_us mt-3">
              <li>
                <Link to="">Etkinlik biletleriniz</Link>
              </li>
              <li>
                <Link to="">Reklam verin</Link>
              </li>
              <li>
                <Link to="">Kariyer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tredemark">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="tredemark">
            © 2022 Biletix Bilet Dağıtım Basım ve Tic. A.Ş. Tüm hakları saklıdır
          </span>
          <span className="tredemark_text">
            Bu internet sitesinin kullanımı, ticari kullanımı engelleyen
            Kullanım Koşulları'na tabidir. Bu sayfayı geçtiğinizde bu koşulları
            kabul etmiş sayılırsınız.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
