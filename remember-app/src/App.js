import Home from "./commponents/Home";
import TripleInput from "./commponents/TripleImput/TripleImput";
function App() {
  const getData = function (data) {
    console.log("data that i get is" + data.uname);
  };
  return (
    <div>
      <Home name="vladimir" />
      <TripleInput onGetData={getData} />
    </div>
  );
}

export default App;
