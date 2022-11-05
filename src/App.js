import { Route, Routes } from "react-router-dom";
import Loadable from "react-loadable";

import Navigation from "Components/Navigation/Navigation";
import { mainNav } from "Components/Navigation/conf";
import FormPage from "./Pages/Form/Form";
import ApiTest from "./Pages/ApiTest/ApiTest";


const Loading = () => <div> Loading... </div>;

const Home = Loadable({
  loader: () => import("./Pages/Home/Home"),
  loading: Loading,
});
const Users = Loadable({
  loader: () => import("./Pages/Users/Users"),
  loading: Loading,
});
const Tracking = Loadable({
  loader: () => import("./Pages/ApiTest/ApiTest"),
  loading: Loading,
});

function App() {

  return (
    <div className="App">
      <Navigation mainNav={mainNav} />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/api" exact element={<ApiTest />} />
        <Route path="/form" exact element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
