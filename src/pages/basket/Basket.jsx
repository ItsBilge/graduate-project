import React from "react";
import { useSelector } from "react-redux";

function Basket({ removeBasket }) {
  const { baskets } = useSelector((state) => state.basket);
  debugger;
  return (
    <div className="row p-5">
      {baskets ? (
        baskets.map((activity) => (
          <div className="col-md-3">
            <div className="card">
              <img
                src={activity.activityImage}
                className="card-img-top w-100"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{activity.title}</h5>
                <p className="card-text">Fiyat: {activity.ticketprice}₺</p>
                <button
                  className="btn btn-warning"
                  onClick={() => removeBasket(activity.id)}
                >
                  Sepetten Kaldır
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div class="alert alert-danger" role="alert">
            <h4> Sepette hiç ürün bulunmamaktadır </h4>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
