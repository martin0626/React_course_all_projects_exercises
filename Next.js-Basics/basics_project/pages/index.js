import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={"/news"}>News</Link>
        </li>
      </ul>
    </Fragment>
  );
}
