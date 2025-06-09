import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import CategoryContainer from "./components/CategoryContainer";
import { useLocation } from "react-router-dom";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);
  // }, []);

  const location = useLocation();

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <CategoryContainer />
    </>
  );
}

export default App;
