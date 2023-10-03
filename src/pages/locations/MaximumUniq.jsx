import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../locations/MaximumUniq.css";

function MaximumUniq() {
  const url = "https://localhost:7007/api/Activities/9";
  const [oyunlar, setOyunlar] = useState([]);
  useEffect(() => {
    getOyunlar();
  }, []);

  const getOyunlar = async () => {
    const res = await axios.get(url);
    setOyunlar(res.data);
  };
  return (
    <>
      <section className="container w-75">
        <div className="row">
          <div className="col-12">
            <div id="place-detail" className="mt-4">
              <div className="palace-detail_title">Maximum Uniq Açıkhava</div>
              <img
                src="/images/maximum-uniq-acikhava.png"
                alt=""
                className="d-block w-100 border rounded-4"
              />
            </div>
            <div className="place-detail">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <h1 className="detail-top-title">
                      Maximum Uniq Açıkhava etkinlikleri
                    </h1>
                    <div className="detail-place">
                      <span>
                        <i className="fa-solid fa-map-pin" />
                        <p>
                          UNIQ İstanbul - Huzur Mah. Maslak Ayazağa Cad. Ayazağa
                          Cendere Yolu No: 4 SARIYER / İstanbul
                        </p>
                      </span>
                      <Link
                        className="place-location"
                        to="https://www.google.com/maps/place/41%C2%B006'28.3%22N+29%C2%B000'28.4%22E/@41.1078561,29.0078846,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.1078561!4d29.0078846?entry=ttu"
                      >
                        <i className="fa-solid fa-location-dot me-1" />
                        <b>Konumu</b>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="oyunlar">
                      <div className="box-header-wrapper">
                        <h3 className="box-header-title mb-auto">
                          Maximum Uniq Açıkhava Biletleri
                        </h3>
                        <span className="ms-2">4</span>
                      </div>
                    </div>
                    <div className="place-event-list">
                      <div className="row">
                        {oyunlar.map((oyun) => (
                          <div className="col-md-4 mt-5">
                            <div className="card">
                              <Link to="">
                                <img
                                  className="card-img"
                                  src={oyun.activityImage}
                                  alt=""
                                />
                              </Link>
                              <div className="card-body">
                                <h4>{oyun.description}</h4>
                                <Link
                                  id={oyun.id}
                                  className="text-decoration-none"
                                  to="/activityDetail" //bakılacak///
                                >
                                  <div className="event-ticket-price">
                                    <span>
                                      {oyun.ticketprice}
                                      <em>TL</em>
                                    </span>
                                    <i className="fa-solid fa-basket-shopping" />
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MaximumUniq;
