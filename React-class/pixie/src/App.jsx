import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <PageHeader />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <PageFooter />
    </>
  );
}

export default App;
