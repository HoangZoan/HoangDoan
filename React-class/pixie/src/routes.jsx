import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <CssBaseline />

      <PageHeader />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
