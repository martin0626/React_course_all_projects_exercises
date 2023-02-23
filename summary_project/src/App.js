import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTodoPage from "./pages/NewTodoPage";
import RootLayout from "./pages/RootLayout";
import TodoPage from "./pages/TodoPage";
import { action as newTodoAction } from "./pages/NewTodoPage";
import { loader as todosLoader } from "./pages/TodoPage";
import ImportantPage from "./pages/ImportanTodosPage";

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
      {
        path: "/important",
        element: <ImportantPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
