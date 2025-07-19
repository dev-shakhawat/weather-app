import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";


// pages
import Welcome from "./pages/Welcome";
import Layout from "./globalComponents/Layout";

// pages
import Weather from "./pages/Weather";
import City from "./pages/City";
import Map from "./pages/Map";
import Setting from "./pages/Setting";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/weather" element={<Layout />}>
             <Route index element={<Weather />} />
             <Route path="cities" element={<City />} />
             <Route path="map" element={<Map />} />
             <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
