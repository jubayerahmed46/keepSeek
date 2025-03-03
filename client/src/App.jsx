import { Route, Routes } from "react-router";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
