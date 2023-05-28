import { redirect } from "react-router";
import { useSearchParams } from "react-router-dom";

const ShowAll = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showHandler = () => {
    setSearchParams("");
  };
  return <a onClick={showHandler}>Show All</a>;
};

export default ShowAll;
