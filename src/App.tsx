import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Cards from "./components/technologies/Cards";
import End from "./components/footer/End";
import Up from "./components/footer/Up";

const technologyFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const cardPromise = technologyFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2 className="text-center text-2xl">Loading...</h2>}>
        <Cards cardPromise={cardPromise} />
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
      <Up />
      <End />
    </>
  );
}
export default App;
