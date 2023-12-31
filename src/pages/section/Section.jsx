import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../section/Section.css";
import Navigation from "../navigation/Navigation";

function Section() {
  const url = "https://localhost:7007/api/Activities";
  const cateUrl = "https://localhost:7007/api/Categories";
  const [activities, setActivities] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getActivities();
    getActivityCate();
  }, []);

  const getActivities = async () => {
    const res = await axios.get(url);
    setActivities(res.data);
    setIsPending(false);
  };

  const getActivityCate = async () => {
    const res = await axios.get(cateUrl);
    setCategories(res.data);
  };

  return (
    <>
      <Navigation />
      <section>
        {/*----section slider ---*/}
        <div id="slider">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Link to="">
                  <img
                    src="../images/harbiye-cemil-topuzlu-acikhava-tiyatrosu.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="carousel-item">
                <Link to="/hangoutPsm">
                  <img
                    src="../images/hangout-psm-89427.webp"
                    className="d-block w-100"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="carousel-item">
                <Link to="">
                  <img
                    src="../images/if-performance-hall-besiktas.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="carousel-item">
                <Link to="/maximumUniq">
                  <img
                    src="../images/maximum-uniq-acikhava-23207.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="carousel-item">
                <Link to="">
                  <img
                    src="../images/hayal-kahvesi-aqua-florya.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id="home">
          {/*--- section categories */}
          <div className="categories">
            <div className="container">
              <nav>
                <ul className="categories-menu">
                  {categories.map((category) => (
                    <li>
                      <span className="d-flex align-items-center">
                        <i
                          className="fa-solid fa-music me-3"
                          style={{ fontSize: 35 }}
                        />
                        <Link
                          id={category.id}
                          className="main-header-category"
                          to={`/activitybycategory/${category.id}`}
                        >
                          {category.name}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          {/*-- section events */}
          <div className="container">
            <div className="row">
              <div id="event_music">
                <h2 className="event_title">
                  <Link className="event__link" to="">
                    Etkinlikler
                  </Link>
                </h2>
                <div className="row">
                  {isPending && <div>Loading...</div>}
                  {activities.map((activity) => (
                    <div className="col-md-4">
                      <Link
                        to={`/activities/${activity.id}`}
                        key={activity.id}
                        className="card"
                      >
                        <img
                          className="card-img"
                          src={activity.activityImage}
                        />
                        <h3 className="card-text">{activity.title}</h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
