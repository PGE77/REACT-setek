import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NumberPaginationExample from "./components/NumberPaginationExample";
import Serials from "./pages/Serials";
import Error from "./pages/Error";
import ShareLayout from "./pages/ShareLayout";
import OneMovie from "./components/OneMovie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/pagination/" element={<NumberPaginationExample />}></Route>
          <Route path="/serials" element={<Serials />}></Route>
          <Route path="/all-movies/:movieId/:category" element={<OneMovie />}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
