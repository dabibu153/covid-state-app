import React, { useState, useEffect } from "react";
import Represent from "./represent";
import "./App.css";
function App() {
  const [data, setdata] = useState([]);

  let recievedata = async () => {
    let data1 = await fetch("https://api.covid19india.org/data.json");
    let data2 = await data1.json();
    setdata(data2.statewise);
  };

  useEffect(() => {
    recievedata();
  }, []);

  const handlesearch = (e) => {
    e.preventDefault();
    recievedata();
  };

  const [search, setSearch] = useState("");

  let sorted_data = data.sort((a, b) => b.active - a.active);

  return (
    <div className="test2">
      <button onClick={(e) => handlesearch(e)}>refresh!</button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="test">
        {sorted_data
          .filter((e) => e.state.includes(search))
          .map((final_data) => (
            <Represent
              state={final_data.state}
              active={final_data.active}
              confirmed={final_data.confirmed}
              deaths={final_data.deaths}
              updated={final_data.lastupdatedtime}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
