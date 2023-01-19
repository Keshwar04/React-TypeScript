import { FC } from "react";

interface Props {
  name: object;
}

export const Child: FC<Props> = ({ name }) => {
  console.log(name);
  return (
    <>
      <div>{name.value}</div>
    </>
  );
};
