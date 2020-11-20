import Quiz from "./Components/quiz/quiz";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splashscreen from "./Components/splashscreen/splashscreen";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Splashscreen} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
