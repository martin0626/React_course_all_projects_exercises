import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTodoPage from "./pages/NewTodoPage";
import RootLayout from "./pages/RootLayout";
import TodoPage from "./pages/TodoPage";
import { action as newTodoAction } from "./pages/NewTodoPage";
import { loader as todosLoader } from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
        loader: todosLoader,
      },
      {
        path: "/new",
        element: <NewTodoPage />,
        action: newTodoAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
