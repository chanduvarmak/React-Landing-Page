import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithApi from "./api";
import Profile from "./profile/profile";
import MyButton from "./practice";
import ValidatingForm from "./form/form";
import Tailwind from "./tailwind/tailwind";
import Navbar from "./navbar/navbar";
import HeroSection from "./home/home";
import Video from "./video/video";
import Service from "./service/service";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<HeroSection />} />
                    <Route path="withapi" element={<WithApi />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="mybutton" element={<MyButton />} />
                    <Route path="ContactForm" element={<ValidatingForm />} />
                    <Route path="Blog" element={<Tailwind />} />
                    <Route path="Home" element={<HeroSection />} />
                    <Route path="Video" element={<Video />} />
                    <Route path="Service" element={<Service />} />
                    <Route path="*" element={<ValidatingForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

} 