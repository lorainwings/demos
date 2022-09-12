import { useRef } from "react";
import Child from "./Child";

export interface IRefPayload {
  controller: () => void;
}

const Parent: React.FC = () => {
  const childRef = useRef<IRefPayload>(null);

  const invokeController = () => {
    childRef.current?.controller();
  };
  return (
    <>
      <Child ref={childRef} />
      <button onClick={invokeController}>invoke controller!</button>
    </>
  );
};

export default Parent;
