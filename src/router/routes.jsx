import Layout from "../components/Layout";
import EasyGamePage from "../pages/EasyGamePage";
import GamesPage from "../pages/GamesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NormalGamePage from "../pages/NormalGamePage";
import RegisterPage from "../pages/RegisterPage";
import RulesPage from "../pages/RulesPage";
import ScoresPage from "../pages/ScoresPage";

const withLayout = (element) => <Layout>{element}</Layout>;

const routes = [
  {
    path: "/",
    element: withLayout(<HomePage />),
  },
  {
    path: "/games",
    element: withLayout(<GamesPage />),
  },
  {
    path: "/games/easy",
    element: withLayout(<EasyGamePage />),
  },
  {
    path: "/games/normal",
    element: withLayout(<NormalGamePage />),
  },
  {
    path: "/rules",
    element: withLayout(<RulesPage />),
  },
  {
    path: "/scores",
    element: withLayout(<ScoresPage />),
  },
  {
    path: "/login",
    element: withLayout(<LoginPage />),
  },
  {
    path: "/register",
    element: withLayout(<RegisterPage />),
  },
];

export default routes;
