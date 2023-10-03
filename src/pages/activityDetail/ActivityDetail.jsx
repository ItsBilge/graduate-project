import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../activityDetail/ActivityDetail.css";

const ActivityDetail = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const locUrl = "https://localhost:7007/api/Location/";

  axios.get(locUrl).then((res) => setLocations(res.data[0]));

  useEffect(() => {
    const url = "https://localhost:7007/api/Activities/" + id;
    axios
      .get(url)
      .then((res) => setEvents(res.data[0]))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <section className="container w-75 mt-3">
        <div className="row">
          <div className="col-md-12">
            <div id="activity-detail">
              {/* etkinlik title ı */}
              <>
                <h1 className="text-black">{events.title}</h1>
                <div
                  id="detail_locDate"
                  className="d-flex align-items-center justify-content-between text-black"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>{locations.name}</div>
                    <div className="ms-4">Tarih: {events.activityDate}</div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-primary btn-sm mb-2 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-share-from-square me-2" />
                      Paylaş
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://web.whatsapp.com/"
                        >
                          <i
                            style={{ color: "#33d26b" }}
                            className="fa-brands fa-whatsapp rounded me-2"
                          />
                          WhatsApp
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.instagram.com/"
                        >
                          <i
                            style={{ color: "#7a2fa2" }}
                            className="fa-brands fa-instagram me-2"
                          />
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.linkedin.com/feed/"
                        >
                          <i
                            style={{ color: "#0072b1" }}
                            className="fa-brands fa-linkedin-in me-2"
                          />
                          Linkedin
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="events-img" className="card">
                  <img className="card-img" src={events.activityImage} alt="" />
                </div>
              </>
              <div id="more_detail_event" className="mt-3">
                <div
                  id="activity-detail-list"
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex justify-content-start align-items-center">
                    <a href="#aboutEvent">Etkinliğe Dair</a>
                    <a href="#buyTicket">Bilet Satın Al</a>
                    <a href="#eventRules">Etkinlik Kuralları</a>
                  </div>
                  <div>
                    <button className="btn btn-outline-primary d-flex justify-content-between align-items-center">
                      <span>Sepete Ekle</span>
                      <i className="fa-solid fa-basket-shopping rounded ms-2" />
                    </button>
                  </div>
                </div>
                <hr />
                <h3 name="aboutEvent" className="mt-5 text-black fs-4">
                  Etkinliğe Dair
                </h3>
                <div className="mb-5 mt-3 text">{events.description}</div>
                <hr />
                <div className="col-lg-12 mt-3">
                  <a name="buyTicket" className="mb-3 text-black fs-4">
                    Bilet Satın Al
                  </a>
                  <div className="tickets d-flex justify-content-between align-items-center p-4 mt-3 mb-3">
                    <div className="d-flex flex-column">
                      <div className="tickets-date fw-bold text">
                        {events.activityDate} / 20:30
                      </div>
                      <div className="tickets-place mt-2 mb-2 text">
                        {locations.name}
                      </div>
                      <div className="chose_chair">
                        <i className="fa-solid fa-couch me-2" />
                        <span className="text">Koltuk Seçmeli</span>
                      </div>
                    </div>
                    <div className="ticket-price d-flex flex-column align-items-center ">
                      <span className="mb-3">{events.ticketprice} TL</span>
                      <Link className="buy-btn" to="">
                        Satın al
                      </Link>
                    </div>
                  </div>
                  <a name="eventRules" className=" text-black fs-4">
                    Etkinlik Kuralları
                  </a>
                  <div className="text">
                    - Etkinlikte 6 yaş sınırı vardır. 6 yaş ve üzeri bilete
                    tabidir.
                    <br />
                    - Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi
                    telefondan göstermeniz gerekmektedir.
                    <br />- Organizatör firma, misafirlere rahatça
                    eğlenebilecekleri bir ortam sunabilmek için mekan girişinde
                    uygun görmediği kişileri kapıda bilet iadesi yaparak içeri
                    almama hakkına sahiptir.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityDetail;
