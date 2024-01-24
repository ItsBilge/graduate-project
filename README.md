# Aloha Academy Graduation Project 
## Etkinlik web sitesi
BiMoLa adını verdiğim etkinlik sitesinde konser, tiyatro, stund-up, aile ve spor kategorilerine göre çeşitli mekanlarda gerçekleşen etkinlikler bulunmaktadır. Kullanıcı kendine uygun tarih, konum ve saate göre etkinlik seçimi yapıp sepetine ekleyebilmektedir. Proje Reactjs kullanılarak yapılmıştır.
## Projeye başlarken indirilmesi gereken paketler
- `npx create-react-app graduate-project (projeye verilen isim)`
- `npm install react-router-dom`
- `npm install axios`
- `npm install sweetalert2`
## Features
- Tüm içerikleri ana sayfada göster

https://github.com/ItsBilge/graduate-project/assets/97183087/d8a044e3-81f5-48b6-8740-3c13091f86b4
## Routes ve Route kullanımı
Web sitesinde header ve footer alanı sabit olmalı ve sadece section alanı seçilen olaya göre değişmelidir. Bunun için App.js dosyasında Header ve Footer alanını Routes sarmalının dışında tutuyoruz. Oluşturduğumuz bütün jsx dosyalarını app.js içine dahil ettikten sonra aynı zamanda import edildiğinden emin olalım.
```
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Section from "./pages/section/Section";
import Footer from "./components/footer/Footer";
import Register from "./pages/aboutLogin/Register";
import UserLogin from "./pages/aboutLogin/UserLogin";
import MaximumUniq from "./pages/locations/MaximumUniq";
import HangOutpsm from "./pages/locations/HangOutpsm";
import ActivityDetail from "./pages/activityDetail/ActivityDetail";
import ActivityByCategory from "./pages/activityByCategory/ActivityByCategory";
import SearchResult from "./pages/SearchResult";
import Basket from "./pages/basket/Basket";

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
```
## Header JSX
header alanında bulunan etkinlik kategorilerini database'den axios kullanarak çektim.
```
function Header({ basket }) {
  const cateUrl = "https://localhost:7007/api/Categories";
  const [categories, setCategories] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    getActivityCate();
  }, []);

  const getActivityCate = async () => {
    const res = await axios.get(cateUrl);
    setCategories(res.data);
  };
```
oluşturduğum categories'i map kullanarak ekrana yansıttım
```
return (
  <div id="main-categories">
    <ul id="main-header-categories">
        {categories.map((category) => (
           <li>
              <Link
                  id={category.id}
                  className="main-header-category"
                  to={`/activitybycategory/${category.id}`}
              >
                {category.name}
              </Link>
           </li>
        ))}
    </ul>
  </div>
```
## Section JSX
Aynı şekilde ana sayfada bulunan etkinlikler veri tabanından ekrana yansıtıldı.
```
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
```
```
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
```
## Etkinlik Detay sayfası
Section jsx te bulunan her bir activity'e tıklanıldığında Link içinde bulunan "to" ile ActivityDetails componentine yönlendirme yapıldı. Alınan activity.id ile her bir aktivite için kayıtlı title, img ve açıklama ActivityDetail sayfasına yansıtıldı. Bunun için "useParams()" kullandım.
```
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
```
```
return (
  <h1 className="text-black">{events.title}</h1>
  <div className="ms-4">Tarih: {events.activityDate}</div>
  <img className="card-img" src={events.activityImage} alt="" />
  <div className="mb-5 mt-3 text">{events.description}</div>
  <span className="mb-3">{events.ticketprice} TL</span>
)
```
