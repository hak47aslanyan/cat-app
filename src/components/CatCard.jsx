import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../redux/catRedux/cat.actions";
import { CAT_KEY } from "../redux/catRedux/cat.reducer";

const CatApp = () => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  let viewCat = useSelector((state) => {
    return state[CAT_KEY];
  });

  let handleBtn = () => {
    dispatch(loadData());
  };

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h5>CAT IMAGE GENERATOR</h5>
        </div>
        <div className="card-body">
          <div className="catContainer">
            <div className="imgContainer">
              {viewCat.data.length === 0 ? null : (
                <React.Fragment>
                  {viewCat.data.map((item) => {
                    return (
                      <div key={item.id}>
                        <img src={item.url} alt="" />
                      </div>
                    );
                  })}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CatApp;
