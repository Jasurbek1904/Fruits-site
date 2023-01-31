import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { API_BAKERY, API_DRINKS, API_FRUITS, API_MEAT, API_PASTA, API_SELLING, API_SEMI_FISH, API_SWEETS, API_VEGETABLES } from "../API";
import ImagesDetails from "./ImagesDetails";
import ImagesFull from "./ImagesFull";
import MainPage from "./MainPage";
import MyFooter from "./MyFooter";
import MyNavbar from "./MyNavbar";
import NewProCard from "./NewProCard";
import PageNotFound from "./PageNotFound"

export default function AllPage() {
    return (
        <BrowserRouter>
            <MyNavbar />
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/fruits" element={<ImagesFull api={API_FRUITS} name="Fruits" link="fruits" />} />
                <Route path="/fruits/:id" element={<ImagesDetails api={API_FRUITS} />} />
                <Route path="/vegetables" element={<ImagesFull api={API_VEGETABLES} name="Vegetables" link="vegetables" />} />
                <Route path="/meat" element={<ImagesFull api={API_MEAT} name="Meat" link="meat" />} />
                <Route path="/meal" element={<ImagesFull api={API_PASTA} name="Meal" link="meal" />} />
                <Route path="/cakes" element={<ImagesFull api={API_SWEETS} name="Cakes" link="cakes" />} />
                <Route path="/bakery" element={<ImagesFull api={API_BAKERY} name="Bakery" link="bakery" />} />
                <Route path="/semiFish" element={<ImagesFull api={API_SEMI_FISH} name="Semi Finished" link="semiFish" />} />
                <Route path="/drinks" element={<ImagesFull api={API_DRINKS} name="Drinks and Milks" link="drinks" />} />
                {/* <Route path="/selling" element={<ImagesFull api={API_SELLING} name="Seelings" link="selling" />} /> */}

                <Route path="/vegetables/:id" element={<ImagesDetails api={API_VEGETABLES} />} />
                <Route path="/meat/:id" element={<ImagesDetails api={API_MEAT} />} />
                <Route path="/meal/:id" element={<ImagesDetails api={API_PASTA} />} />
                <Route path="/cakes/:id" element={<ImagesDetails api={API_SWEETS} />} />
                <Route path="/bakery/:id" element={<ImagesDetails api={API_BAKERY} />} />
                <Route path="/semiFish/:id" element={<ImagesDetails api={API_SEMI_FISH} />} />
                <Route path="/drinks/:id" element={<ImagesDetails api={API_DRINKS} />} />
                {/* <Route path="/selling/:id" element={<ImagesDetails api={API_SELLING} />} /> */}

                {/* <Route path="/newProCard/:id" element={<NewProCard />} /> */}


                <Route path="/*" element={<PageNotFound />} />


            </Routes>
            <MyFooter />
        </BrowserRouter>
    )
}