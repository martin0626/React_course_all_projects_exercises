import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTodoPage from "./pages/NewTodoPage";
import RootLayout from "./pages/RootLayout";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
      },
      {
        path: "/new",
        element: <NewTodoPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
