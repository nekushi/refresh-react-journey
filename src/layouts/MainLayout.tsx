import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [count, setCount] = useState<number>(0);

  const handleDecrementCount = () => {
    setCount((n) => n - 1);
  };

  const handleIncrementCount = () => {
    setCount((n) => n + 1);
  };

  return (
    <>
      <Navbar />
      <Outlet
        context={{
          count,
          handleIncrementCount,
          handleDecrementCount,
        }}
      />
    </>
  );
}
