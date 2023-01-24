import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode != "login" || mode != "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
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

  if (request.status === 422 || request.status === 401) {
    return response;
  }

  if (!request.ok) {
    throw json({ message: "Could not Authenticate" }, { status: 500 });
  }

  return redirect("/");
}
