import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  let error = useRouteError();
  let message = "Something went wrong!";
  let status = error.status;
  let title = "An error occurred!";

  if (status === 500) {
    message = error.data.message;
  } else if (status === 404) {
    title = "Not Found";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
