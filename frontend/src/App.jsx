import { useEffect } from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/predict")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
