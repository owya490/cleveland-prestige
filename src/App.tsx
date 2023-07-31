import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Detailing from "./pages/servicePages/Detailing";
import Modifications from "./pages/servicePages/Modifications";
import ExteriorBodyWork from "./pages/servicePages/ExteriorBodyWork";
import PinkBlueSlip from "./pages/servicePages/PinkBlueSlip";
import AboutBanner from "./components/AboutBanner";
import Navbar from "./components/Navbar";
import GalleryCarousel from "./components/GalleryCarousel";
import Footer from "./components/Footer";
import Servicing from "./pages/servicePages/Servicing";
import MechanicalAndElectricalRepairs from "./pages/servicePages/MechanicalAndElectricalRepairs";
import GoogleReviewCarousel from "./components/GoogleReviewCarousel";

function App() {
    return (
        <div className="bg-black">
            <Navbar />
            <div className="space-y-32">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="about" element={<HomePage />}></Route>
                        <Route path="contact" element={<ContactPage />}></Route>
                        <Route
                            path="services/detailing"
                            element={<Detailing />}
                        ></Route>
                        <Route
                            path="services/servicing"
                            element={<Servicing />}
                        ></Route>
                        <Route
                            path="/services/modifications"
                            element={<Modifications />}
                        ></Route>
                        <Route
                            path="/services/pink-blue-slip"
                            element={<PinkBlueSlip />}
                        ></Route>
                        <Route
                            path="/services/exterior-body-work"
                            element={<ExteriorBodyWork />}
                        ></Route>
                        <Route
                            path="/services/repairs"
                            element={<MechanicalAndElectricalRepairs />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
                <GoogleReviewCarousel />
                <GalleryCarousel />
            </div>
            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
}

export default App;
