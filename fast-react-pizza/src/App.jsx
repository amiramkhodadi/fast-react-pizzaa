import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/ui/Home";
import Menu from "./feature/menu/Menu";
import Cart from "./feature/cart/Cart";
import CreateOrder from "./feature/order/CreateOrder";
import Order from "./feature/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderid",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
