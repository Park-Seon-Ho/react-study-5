import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  const data = {
    name : "박선호",
    age : "18",
    address : "부천시 소사구",
    race : "부천 토박이",
    favorList : ["라면","순대","어묵","떡볶이",
    "돈까스","덮밥","마라탕","부대찌개"],
    num : Math.floor(Math.random() * 8),
  }
  return (
    <div className="App">
      <Header />
      <Body {...data}/>
      <Footer />
    </div>
  );
}

export default App;
