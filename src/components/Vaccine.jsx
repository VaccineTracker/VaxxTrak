import React, { useState, useEffect }  from "react";
import Search from './Search';
const Vaccine = () => {

  const [vaccine, getVaccine] = useState(null);
  const [cases, getCases] = useState(null);
  
  useEffect(() => {
    fetch('/vaccine')
      .then((data) => data.json)
      .then((results) => getVaccines(results))
  }, []);
  
  return (
    <div className="vaccineMain">
      <div className="search">
        <p>this is a cute search bar</p>
        <Search />
      </div>
      <div className="vaccineChart">a gorgeous chart</div>
    </div>
  )
};
export default Vaccine;