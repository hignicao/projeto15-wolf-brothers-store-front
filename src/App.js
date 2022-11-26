import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SelectedProductPage from "./pages/SelectedProductPage/SelectedProductPage";
import GlobalStyle from "./assets/style/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { UserProvider } from "./providers/UserData";
import Cart from "./components/Cart/Cart";
import StatesContext from "./providers/StatesContext";
import { useState } from "react";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <UserProvider>
      <StatesContext.Provider
        value={{ showCart, setShowCart, showResult, setShowResult }}
      >
        <GlobalStyle />
        <BrowserRouter>
          {showCart && <Cart />}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/product/:productId"
              element={<SelectedProductPage />}
            />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </StatesContext.Provider>
    </UserProvider>
  );
}

export default App;
