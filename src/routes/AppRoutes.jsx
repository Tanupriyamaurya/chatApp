import { Routes, Route } from "react-router-dom";
import Home from "../presentation/components/home/Home";
import Login from "../presentation/components/auth/Login";
import Cart from "../presentation/components/cart/Cart";
import TrackOrder from "../presentation/components/trackOrder/TrackOrder";
import ProtectedRoute from "./ProtectedRoutes";

import Profile from "../pages/Profile";
import Order from "../pages/Order";
import Wishlist from "../pages/Wishlist";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions"; // import page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/track-order"
        element={
          <ProtectedRoute>
            <TrackOrder />
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
            <AboutUs />
        }
      />

      <Route
        path="/contact"
        element={
            <ContactUs />
        }
      />

      <Route
        path="/privacy-policy"
        element={
        
            <PrivacyPolicy />
        }
      />
      <Route path="/terms" element={<TermsAndConditions />} />

    </Routes>
  );
};

export default AppRoutes;
