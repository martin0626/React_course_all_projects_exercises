import classes from "./search.module.css";

const Search = () => {
  return (
    <section className={classes.search}>
      <form className={classes["search-form"]}>
        <input name="crypto" placeholder="Search..."></input>
        <a className={classes["src-btn"]}>
          <i className="fas fa-search"></i>
        </a>
      </form>
    </section>
  );
};

export default Search;
