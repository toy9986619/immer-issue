import React from 'react';
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

import { actions } from "./features/simpleReducer";

import './App.css';

const StyledIconAlert = styled("span")(({ theme }) => ({
  color: "red"
}));

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      actions.addHintMsg({
        customIcon: {
          displayIcon: (
            <StyledIconAlert>
              <i className="font-icon-alert-fill font-size-20" />
            </StyledIconAlert>
          )
        }
      })
    );
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>test button</button>
      </div>
    </div>
  );
}

export default App;
