import "./App.css";
import DemoLayout from "./LayoutExercise/DemoLayout.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProject from "./components/ListProject/ListProject.jsx";
import GameOanTuXi from "./GameOanTuXi/GameOanTuXi.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import GameXucXac from "./GameXucXac/GameXucXac.jsx";
import BookingTicket from "./BookingTicket/BookingTicket.jsx";
import Burger from "./Burger/Burger.jsx";
import ChooseCar from "./Car/ChooseCar";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/demolayout" component={DemoLayout} />
            <Route exact path="/gameoantuxi" component={GameOanTuXi} />
            <Route exact path="/gamexucxac" component={GameXucXac} />
            <Route exact path="/burger" component={Burger} />
            <Route exact path="/booking-ticket" component={BookingTicket} />
            <Route exact path="/choose-car" component={ChooseCar} />
            <Route exact path="/" component={ListProject} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
