# Aloha Academy Graduation Project 
## Etkinlik web sitesi
BiMoLa adını verdiğim etkinlik sitesinde konser, tiyatro, stund-up, aile ve spor kategorilerine göre çeşitli mekanlarda gerçekleşen etkinlikler bulunmaktadır. Kullanıcı kendine uygun tarih, konum ve saate göre etkinlik seçimi yapıp sepetine ekleyebilmektedir. Proje Reactjs kullanılarak yapılmıştır.
## Projeye başlarken indirilmesi gereken paketler
- `npx create-react-app graduate-project (projeye verilen isim)`
- `npm install react-router-dom`
- `npm install axios`
- `npm install sweetalert2`
## Features

## Tüm içerikleri ana sayfada göster

https://github.com/ItsBilge/graduate-project/assets/97183087/d8a044e3-81f5-48b6-8740-3c13091f86b4

## Etkinlik detay sayfası

https://github.com/ItsBilge/graduate-project/assets/97183087/572e6d9e-444b-49c2-9c02-c8f164bf454a

## Etkinlik arama

https://github.com/ItsBilge/graduate-project/assets/97183087/5c0c6601-0a54-4177-b244-8975bedf51a1


## Etkinlik Detay sayfası

Section jsx te bulunan her bir activity'e tıklanıldığında Link içinde bulunan "to" ile ActivityDetails componentine yönlendirme yapıldı. Alınan activity.id ile her bir aktivite için kayıtlı title, img ve açıklama ActivityDetail sayfasına yansıtıldı. Bunun için "useParams()" kullandım.


https://github.com/ItsBilge/graduate-project/assets/97183087/9c96fe13-1619-4a3e-a399-cdf903ce7659


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
