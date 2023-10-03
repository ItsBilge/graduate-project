import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchResult({ addbasket }) {
  const { query } = useParams();
  const [searchQuery, setsearchQuery] = useState([]);

  useEffect(() => {
    const searchUrl = "https://localhost:7007/api/EventSearch/" + query;
    axios.get(searchUrl).then((res) => setsearchQuery(res.data));
  }, [query]);
  return (
    <>
      <section className="container mt-5 pt-3">
        <div className="row">
          <div className="col-12">
            <div className="place-detail">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <span style={{ fontSize: 18 }} className="detail-top-title">
                      {query} için bulunan etkinlikler...
                    </span>
                  </div>
                  <div className="place-event-list">
                    <div className="row">
                      {searchQuery === null ? (
                        <div class="alert alert-warning" role="alert">
                          Gösterilecek etkinlik bulunamamıştır.
                        </div>
                      ) : (
                        <>
                          {searchQuery.map((search) => (
                            <div className="col-md-4 mt-5">
                              <div className="card">
                                <Link to={`/activities/${search.id}`}>
                                  <img
                                    className="card-img-top"
                                    src={search.activityImage}
                                    alt=""
                                  />
                                </Link>
                                <div className="card-body">
                                  <h3>{search.title}</h3>
                                  <Link className="text-decoration-none" to="">
                                    <div className="event-ticket-price">
                                      <span>
                                        {search.ticketprice}
                                        <em>TL</em>
                                      </span>
                                      <button
                                        onClick={() => addbasket(search)}
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

export default SearchResult;
