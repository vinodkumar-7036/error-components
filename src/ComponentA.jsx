import React, { useState, useEffect } from "react";

function ComponentA() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 5) {
      throw new Error("componetA crashed");
    }
  }, [count]);
  return (
    <div>
      <center>
        <h1>{count}:</h1>
        <button onClick={() => setCount(count + 1)}>ComponentA</button>
      </center>
    </div>
  );
}

export default ComponentA;
