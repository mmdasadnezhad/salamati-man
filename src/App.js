import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'rsuite/dist/rsuite.min.css';
import HeaderDiv from "./layouts/header/HeaderDiv";
import Ccontainer from "./pages/content/Ccontainer";
function App() {
  return (
    <div className="App">
      <ThemeProvider dir="rtl">
        
        <HeaderDiv />
        <Ccontainer />

        {/* <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
