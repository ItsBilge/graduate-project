import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HangOutpsm({ addBasket }) {
  const url = "https://localhost:7007/api/Activities/8";
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
              <div className="palace-detail_title">Hangout PSM</div>
              <img
                src="/images/hangout-psm-detail.jpg"
                alt=""
                className="d-block w-100 border rounded-4"
              />
            </div>
            <div className="place-detail">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <h1 className="detail-top-title">
                      Hangout PSM etkinlikleri
                    </h1>
                    <div className="detail-place">
                      <span>
                        <i className="fa-solid fa-map-pin" />
                        <p>
                          Kazımdirik, Metro Durağı, Üniversite Cd. No: 92, 35100
                          Bornova/İzmir
                        </p>
                      </span>
                      <a
                        className="place-location"
                        href="https://www.google.com/maps/place/38%C2%B027'01.2%22N+27%C2%B011'35.7%22E/@38.4503312,27.1932438,17z/data=!3m1!4b1!4m4!3m3!8m2!3d38.4503312!4d27.1932438?entry=ttu"
                        target="_blank"
                      >
                        <i className="fa-solid fa-location-dot me-1" />
                        <b>Konumu</b>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="oyunlar">
                      <div className="box-header-wrapper">
                        <h3 className="box-header-title mb-auto">
                          Hangout PSM Biletleri
                        </h3>
                        <span className="ms-2">3</span>
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
                                <h3>{oyun.description}</h3>
                                <Link
                                  onClick={() => {
                                    addBasket(oyun.id);
                                  }}
                                  className="text-decoration-none"
                                  to=""
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

export default HangOutpsm;
