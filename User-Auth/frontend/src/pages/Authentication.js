import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 500 });
  }

  let data = await request.formData();
  let authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not Authenticate" }, { status: 500 });
  }

  let resData = await response.json();
  let token = resData.token;

  localStorage.setItem("token", token);

  // TODO Mistake with Date!
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  console.log(expiration.toISOStrig());
  localStorage.setItem("expiration", expiration.toISOStrig());

  return redirect("/");
}
