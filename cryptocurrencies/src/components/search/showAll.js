import { redirect } from "react-router";
import { useSearchParams } from "react-router-dom";
import classes from "./showAll.module.css";

const ShowAll = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showHandler = () => {
    setSearchParams("");
  };

  return (
    <a className={classes["show-all"]} onClick={showHandler}>
      All
    </a>
  );
};

export default ShowAll;
