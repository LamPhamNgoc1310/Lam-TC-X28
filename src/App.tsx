import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./components/Auth.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import Home from "./components/Home.tsx";
import Layout from "./components/Layout.tsx";
import Explore from "./components/explore/Explore.tsx";
import ExploreDetails from "./components/explore/ExploreDetails.tsx";
import UserProfile from "./components/profile/UserProfile.tsx";
import ForgotPassword from "./components/forgotpassword/ForgotPassword.tsx";
import SendCode from "./components/forgotpassword/SendCode.tsx";
import ResetPassword from "./components/forgotpassword/ResetPassword.tsx";


const App = () => {
  return (
    <Routes>
      {/* Route cho layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:cityName" element={<ExploreDetails />} />
        <Route path="/profile/:id" element={<UserProfile/>}/>
      </Route>

      {/* Route cho auth */}
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="sendcode" element={<SendCode/>} />
        <Route path="resetpassword" element={<ResetPassword/>} />
      </Route>

      {/* Route không tìm thấy */}
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default App;
