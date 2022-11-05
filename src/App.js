import { Route, Routes } from "react-router-dom";
import Loadable from "react-loadable";

import Navigation from "Components/Navigation/Navigation";
import UserNavigation from "Components/Navigation/UserNavigation";
import { mainNav } from "Components/Navigation/conf";
import { formConf } from "Components/Form/conf";
import { Form } from "Components/Form/Form";

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
  loader: () => import("./Pages/Tracking/Tracking"),
  loading: Loading,
});

function App() {
  function submitForm(formState) {
    console.log(formState);
  }
  return (
    <div className="App">
      <Navigation mainNav={mainNav} />
      <div className="main">
        <Form formData={formConf} submitForm={submitForm} />
      </div>

      {/*<Routes>*/}
      {/*  <Route path="/" exact element={<Home />} />*/}
      {/*  <Route path="/users" exact element={<Users />} />*/}
      {/*  <Route path="/tracking" exact element={<Tracking />} />*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
