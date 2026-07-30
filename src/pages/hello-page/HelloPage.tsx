import { useEffect } from "react";

export default function HelloPage() {
  useEffect(() => {
    const fetchHelloMsg = async () => {
      const response = await fetch(`http://localhost:3000/hello`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) return response.status;

      const result = await response.json();

      console.log(response.status);
      console.log(response.statusText);
      console.log(result);
    };

    fetchHelloMsg();
  }, []);

  return (
    <div>
      <h1>This is hello page.</h1>
    </div>
  );
}
