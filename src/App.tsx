import { Child } from "./Child";
export const App = () => {
  let value: string = "karthik";

  const getValue = (data: string): string => {
    return data;
  };
  getValue(value);
  let obj = { value, getValue };
  return (
    <div>
      <Child name={obj} />
    </div>
  );
};
