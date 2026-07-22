import { useOutletContext } from "react-router-dom";

export type TypeOutletCountState = {
  count: number;
  handleDecrementCount: () => void;
  handleIncrementCount: () => void;
};

export default function LandingPage() {
  const { count, handleIncrementCount, handleDecrementCount } =
    useOutletContext<TypeOutletCountState>();

  return (
    <div>
      <h3>This is landing page.</h3>
      <button onClick={handleDecrementCount}>-</button>
      <input type="number" value={count} />
      <button onClick={handleIncrementCount}>+</button>
    </div>
  );
}
