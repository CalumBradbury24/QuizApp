import Quiz from "./Components/quiz/quiz";
import Header from './Components/header/header';
import "./App.css";

//header includes score, at end display everyones results!
const App = () => {
  return (
    <div className="App">
      <Header />
      <Quiz />
    </div>
  );
};

export default App;
