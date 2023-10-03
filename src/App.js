import { Route, Routes } from "react-router-dom";
import "../src/css/App.css";
import Header from "./components/Header";
import Section from "./pages/section/Section";
import Footer from "./components/footer/Footer";
import Register from "./pages/aboutLogin/Register";
import UserLogin from "./pages/aboutLogin/UserLogin";
import MaximumUniq from "./pages/locations/MaximumUniq";
import HangOutpsm from "./pages/locations/HangOutpsm";
import Swal from "sweetalert2";
import ActivityDetail from "./pages/activityDetail/ActivityDetail";
import ActivityByCategory from "./pages/activityByCategory/ActivityByCategory";
import SearchResult from "./pages/SearchResult";
import Basket from "./pages/basket/Basket";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  const addBasket = (activity) => {
    const newBasket = [...basket, activity];
    setBasket(newBasket);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Etkinlik başarıyla sepete eklendi",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const removeBasket = (id) => {
    Swal.fire({
      title: "Silmek istediğinize emin misiniz?",
      text: "Sepetten kaldırılacak",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet, sil!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Silindi!", "Etkinlik sepetten silindi.", "success");
        const baskets = [...basket];
        const activityIndex = baskets.findIndex((item) => item.id === id);
        if (activityIndex > -1) {
          baskets.splice(activityIndex, 1);
          setBasket(baskets);
          localStorage.setItem("basket", JSON.stringify(baskets));
        }
      }
    });
  };

  return (
    <div className="App">
      <Header basket={basket} />
      <Routes>
        <Route exact path="/" element={<Section />} />
        <Route path="/login" element={<Register />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/maximumUniq" element={<MaximumUniq />} />
        <Route
          path="/hangoutPsm"
          element={<HangOutpsm addBasket={addBasket} />}
        />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route
          path="/activitybycategory/:id"
          element={<ActivityByCategory addbasket={addBasket} />}
        />
        <Route
          path="/searchResult/:query"
          element={<SearchResult addbasket={addBasket} />}
        />
        <Route
          path="/basket"
          element={<Basket basket={basket} removeBasket={removeBasket} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
