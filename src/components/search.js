import React from "react";
import "./css/home.css";
import "./css/img.css";
import "./css/search.css";
import Navbar from './navbar';
import { useState } from 'react';
// import cars from './data/data'
import Audi from "./img/audi1.jpg";
import Benz from "./img/benz.jpg";
import BMW from "./img/bmw.png";
import Honda from "./img/honda.png";
import Toyota from "./img/toyota.png";

// import { Link } from "react-router-dom";


const logocar = [
  {
    name: "Audi",
  },
  {
    name: "Benz",
  },
  {
    name: "BMW",
  },
  {
    name: "Honda",
  },
  {
    name: "Toyota",
  },
];

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const carNames = logocar.map(car => car.name);
  
  const filteredNames = carNames.filter((name) =>
    name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
  );
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <>
    <Navbar />
    <div>
      <form onSubmit={handleSubmit}>
      <h1 className="search-filter">Search Filter</h1>
      <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>

      {filteredNames.map((name) => {
        return name.includes('Audi') ? <div className="img-p">
           <a href="https://www.audi.co.th/sea/web/th.html">
            <img className="img-i" alt="Audi" src={Audi} />
          </a>
        </div> 
        : name.includes('Benz') ?  <div className="img-p">
        <a href="https://www.mercedes-benz.co.th/en/passengercars.html">
          <img className="img-i" alt="Benz" src={Benz} />
        </a>
        </div>
        : name.includes('BMW') ? <div className="img-p">
          <a href="https://www.bmw.co.th/en/home.html">
          <img className="img-i" alt="BMW" src={BMW} />
        </a>
        </div> 
        : name.includes('Honda') ? <div className="img-p">
        <a href="https://www.honda.co.th/">
        <img className="img-i" alt="Honda" src={Honda} />
      </a>
      </div> 
      : name.includes('Toyota') ? <div className="img-p">
      <a href="https://www.toyota.co.th/">
      <img className="img-i" alt="Toyota" src={Toyota} />
    </a>
    </div> 
    : ''
      })}
      </form>
    </div>
    </>
  );
};

export default Search;
