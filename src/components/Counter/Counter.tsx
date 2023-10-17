import { useState } from "react";
import { SingleCounter } from "./components/SingleCounter";
import styles from "./Counter.module.scss";

export function Counter() {
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const [isDisabled1, setisDisabled1] = useState(false);
  const [isDisabled2, setisDisabled2] = useState(false);

  const sum1 = isDisabled1 ? 0 : counter1;
  const sum2 = isDisabled2 ? 0 : counter2;

  const sumMarkup = (
    <div className={styles.Sum}>
      <h2>Sum</h2>
      <p> {sum1 + sum2}</p>
    </div>
  );

  return (
    <>
      {sumMarkup}
      <SingleCounter
        counter={counter1}
        isDisabled={isDisabled1}
        setCounter={setCounter1}
        setisDisabled={setisDisabled1}
      />
      <br />
      <SingleCounter
        counter={counter2}
        isDisabled={isDisabled2}
        setCounter={setCounter2}
        setisDisabled={setisDisabled2}
      />
    </>
  );
}
