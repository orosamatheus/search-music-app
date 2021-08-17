import { Router } from "react-router-dom";
import { Routes } from "./routes";

import { HomeProvider } from "./context/home"
import history from './history';

import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <HomeProvider>
      <Router history={history}>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyle />
      </Router>
    </HomeProvider>
  );
}

export default App;
