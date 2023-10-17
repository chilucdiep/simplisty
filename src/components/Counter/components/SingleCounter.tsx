import { Dispatch, SetStateAction } from "react";
import { Button } from "../../Button";
import styles from "./SingleCounter.module.scss";

type CounterProps = {
  counter: number;
  isDisabled: boolean;
  setCounter: Dispatch<SetStateAction<number>>;
  setisDisabled: Dispatch<SetStateAction<boolean>>;
};

export function SingleCounter({
  counter,
  isDisabled,
  setCounter,
  setisDisabled,
}: CounterProps) {
  return (
    <div className={styles.CounterContainer}>
      <Button label="-" disabled={isDisabled} onClick={() => decrement()} />
      <p>{counter}</p>
      <Button label="+" disabled={isDisabled} onClick={() => increment()} />
      <Button
        label={isDisabled ? "Enable" : "Disable"}
        variant="primary"
        onClick={() => handleDisable()}
      />
    </div>
  );

  function decrement() {
    setCounter((prev) => prev - 1);
  }

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function handleDisable() {
    setisDisabled((prev) => !prev);
  }
}
