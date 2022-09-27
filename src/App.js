import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import  AOS  from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  const [searchText,setSearchText] = useState('');
  const search = (e) => {
    if (e.target.value) {
      setSearchText(e.target.value);
    } 
  }
  return (
    <div className="App">
      <Header search={search}></Header>
      <Body searchText={searchText}></Body>
    </div>
  );
}

export default App;
