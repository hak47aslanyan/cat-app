import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../redux/catRedux/cat.actions";

import axios from "axios";

function BreedSelect() {
  let url = "https://api.thecatapi.com/v1/breeds";

  const [breeds, setBreeds] = useState([]);
  const [selectedValue, changeSelectedValue] = useState("");

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  let handleBtn = () => {
    dispatch(loadData(selectedValue));
    console.log(selectedValue);
  };

  useEffect(() => {
    getBreeds();
  }, []);

  let getBreeds = async function () {
    let result = axios
      .get(url)
      .then((responce) => {
        const allBreeds = responce.data;
        console.log(allBreeds);
        setBreeds(allBreeds);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    return result;
  };

  let handleChange = (evnt) => {
    changeSelectedValue(evnt.target.value);
    console.log(evnt.target.value);
  };

  return (
    <div className="breedSelectBox">
      <select onChange={handleChange} onClick={handleBtn}>
        {breeds.map((breed) => {
          return <option key={breed.id}>{breed.name}</option>;
        })}
      </select>
    </div>
  );
}

export default BreedSelect;
