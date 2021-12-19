import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Homepage from './Homepage';
import Publisher from './Publisher';
import Navigation from './Navigation';

function App() {
  let [news, setNews] = useState();

  let [publishers, setPublishers] = useState();

  useEffect(() => {
    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json").then((response) => {
      setNews(response.data);
      let pub = [];
      for (let item of response.data) {
        if (!pub.includes(item.PUBLISHER)) {
          pub.push(item.PUBLISHER);
        }
      }
      setPublishers(pub);
    });

  }, []);

  if (!publishers) return null;

  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Homepage publishers={publishers} />} />
        <Route exact path='/Homepage' element={<Homepage publishers={publishers} />} />
        <Route exact path='/:item' element={<Publisher news={news} />} />
      </Routes>
    </>
  );
}

export default App;
