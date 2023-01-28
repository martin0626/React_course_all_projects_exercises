import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href={"/news/asd"}>ASD Detail</Link>
        </li>
        <li>
          <Link href={"/news/d2"}>D2 Detail</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
