import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SelectedProductPage from "./pages/SelectedProductPage/SelectedProductPage";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  console.log("aaaaap")
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<SelectedProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
