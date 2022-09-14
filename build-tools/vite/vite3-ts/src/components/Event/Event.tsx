import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";

const Event = () => {
  const [v, setV] = useState("hello");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <input value={v} onChange={handleChange} />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default Event;
