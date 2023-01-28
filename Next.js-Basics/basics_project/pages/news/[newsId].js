import { useRouter } from "next/router";

export default function NewsDetails() {
  let route = useRouter();
  let newsId = route.query.newsId;
  return <h1>Details Page {newsId}</h1>;
}
