import React, { useState } from "react";

function ComponentB() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        <h1>{count}:</h1>
        <button onClick={() => setCount(count + 1)}>ComponentB</button>
      </center>
    </div>
  );
}

export default ComponentB;
