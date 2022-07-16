import { Refine } from "@pankod/refine-core";
import routerProvider, {
  HashRouterComponent,
} from "@pankod/refine-react-router-v6";
import { authProvider } from "authProvider";
import axios from "axios";
import Products from "components/Products";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Login from "pages/Login";
import Product from "pages/Product";
import Register from "pages/Register";
const axiosInstance = axios.create();
const TOKEN_KEY = "";
axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    if (request.headers) {
      request.headers["Authorization"] = `Bearer ${token}`;
    } else {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return request;
});

function App() {
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            element: <Login />,
            path: "/login",
            // layout: true,
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
      dataProvider={("", axiosInstance)}
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
