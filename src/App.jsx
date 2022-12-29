import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import MyCards from "./components/mycards";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUpBiz from "./components/signupbiz";
import SignOut from "./components/signout";
import ProtectedRoute from "./components/common/protectedroute";
import CreateCard from "./components/createcard";
import DeleteCard from "./components/deletecard";
import EditCard from "./components/editcard";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <NavBar></NavBar>
      </header>
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route
            path="myCards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="createCard"
            element={
              <ProtectedRoute onlyBiz>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="myCards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <DeleteCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="myCards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <EditCard/>
              </ProtectedRoute>
            }
          />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signUpBiz" element={<SignUpBiz />} />
          <Route path="signOut" element={<SignOut />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
