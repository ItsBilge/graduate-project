import React, { useEffect, useState } from "react";
// import "../css/MaximumUniq.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBasket } from "../../store/basketSlice";
import axios from "axios";

function ActivityByCategory() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [cates, setCates] = useState([]);
  const [allCate, setallCate] = useState([]);
  const allCateUrl = "https://localhost:7007/api/Categories";

  const eventbycategory = axios
    .get(allCateUrl)
    .then((res) => setallCate(res.data[id - 1]));

  useEffect(() => {
    const cateUrl = "https://localhost:7007/api/Categories/" + id;

    axios
      .get(cateUrl)
      .then((res) => setCates(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const addToBasket = (cate) => {
    dispatch(addBasket(cate));
  };

  return (
    <>
      <section className="container mt-5 pt-3">
        <div className="row">
          <div className="col-12">
            <div className="place-detail">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <h1 className="detail-top-title">
                      {allCate.name} Etkinlikleri
                    </h1>
                  </div>
                  <div className="place-event-list">
                    <div className="row">
                      {eventbycategory === null ? (
                        <div class="alert alert-warning" role="alert">
                          Gösterilecek etkinlik bulunamamıştır.
                        </div>
                      ) : (
                        <>
                          {cates.map((cate) => (
                            <div className="col-md-4 mt-5">
                              <div className="card">
                                <Link to={`/activities/${cate.id}`}>
                                  <img
                                    className="card-img-top"
                                    src={cate.activityImage}
                                    alt=""
                                  />
                                </Link>
                                <div className="card-body">
                                  <h3>{cate.title}</h3>
                                  <Link className="text-decoration-none" to="">
                                    <div className="event-ticket-price">
                                      <span>
                                        {cate.ticketprice}
                                        <em>TL</em>
                                      </span>
                                      <button
                                        onClick={() => addToBasket(cate)}
                                        className="btn"
                                      >
                                        <i className="fa-solid fa-basket-shopping" />
                                      </button>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
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

export default ActivityByCategory;
