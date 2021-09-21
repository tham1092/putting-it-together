import React, { useState } from "react";

const AumentarEdad = () => {
  const [count1, setCount1] = useState(45);
  const [count2, setCount2] = useState(88);

  const aumento = () => {
    setCount1(count1 + 1);
  };
  const aumento2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <div>
        <h1>Doe, Jane</h1>
        <p>Age: {count1}</p>
        <p>Hair Color: Black</p>
        <button onClick={() => aumento()}>Birthday button for Jane Doe</button>
      </div>
      <div>
      <h1>Smith, John</h1>
      <p>Age: {count2}</p>
      <p>Hair Color: Brown</p>
      <button onClick={() => aumento2()}>Birthday button for John Smith</button>
      </div>
    </div>
  );
};

export default AumentarEdad;
