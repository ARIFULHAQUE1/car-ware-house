import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import About from './Pages/Info/About';
import Contact from './Pages/Info/Contact';
import Blog from './Pages/Info/Blog'
import ManageItem from "./Pages/InvaenvoriesItem/ManageItem";
import MyItem from "./Pages/Home/MyItem";
import Login from "./Pages/Authentication/Login";
import Update from "./Pages/Update";
import AddItem from "./Pages/Home/AddItem";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
       
        <Route path="/myItem" element={<MyItem></MyItem>}></Route>
        <Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/update/:_id" element={<Update></Update>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
