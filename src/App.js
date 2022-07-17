import { Refine } from "@pankod/refine-core";
import routerProvider, {
  HashRouterComponent,
} from "@pankod/refine-react-router-v6";
import { authProvider } from "authProvider";
import { Layout } from "components/Layout";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Login from "pages/Login";
import Product from "pages/Product";
import Register from "pages/Register";
import { axiosInstance } from "utils/api";

function App() {
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            element: <Login />,
            path: "/login",
          },
          {
            element: <Register />,
            path: "/register",
            layout: true,
          },
          {
            element: <Cart />,
            path: "/cart",
            layout: true,
          },
          {
            element: <Product />,
            path: "/product/:id",
            layout: true,
          },
        ],
        RouterComponent: HashRouterComponent,
      }}
      Layout={Layout}
      ReadyPage={Home}
      dataProvider={(process.env.REACT_APP_API, axiosInstance)}
      authProvider={authProvider(axiosInstance)}
      resources={[
        {
          name: "home",
          list: Home,
        },
      ]}
    />
  );
}

export default App;
