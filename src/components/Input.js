import React from "react";

function Input(props) {
  return (
    <select onChange={props.handleMaxStudentsInput}>
     <option value="0"></option>
      <option value="9">9</option>
      <option value="8">8</option>
      <option value="7">7</option>
      <option value="6">6</option>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
  );
}

export default Input;
