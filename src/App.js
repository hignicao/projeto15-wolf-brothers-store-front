import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SelectedProductPage from "./pages/SelectedProductPage/SelectedProductPage";
import GlobalStyle from "./assets/style/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { UserProvider } from "./providers/UserData";

function App() {
  console.log("aaaaap");
  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
       <Header/> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<SelectedProductPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
