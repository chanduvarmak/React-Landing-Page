import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithApi from "./api";
import Profile from "./profile/profile";
import MyButton from "./practice";
import ShoppingList from "./fruits";
import ValidatingForm from "./form/form";
import Tailwind from "./tailwind/tailwind";
import Navbar from "./navbar/navbar";
import HeroSection from "./home/home";
import Video from "./video/video";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    {/* <Route index element={<Profile />} /> */}
                    <Route path="withapi" element={<WithApi />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="mybutton" element={<MyButton />} />
                    <Route path="shoppingList" element={<ShoppingList />} />
                    <Route path="ValidatingForm" element={<ValidatingForm />} />
                    <Route path="blog" element={<Tailwind />} />
                    <Route path="Home" element={<HeroSection />} />
                    <Route path="Video" element={<Video />} />
                    <Route path="*" element={<ValidatingForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

} 