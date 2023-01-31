import React from "react";
import AppScreen from "./AppScreen";
import BestSelling from "./BestSelling";
import MyCarusel from "./Carusel";
import Category from "./Category";
import FreshProduct from "./FreshProduct";
import NewProducts from "./NewProducts";
import SpecialService from "./SpecialService";

export default function MainPage() {


    return (
        <>
            <MyCarusel />
            <Category />
            <NewProducts />
            <SpecialService />
            <FreshProduct />
            <BestSelling />
            <AppScreen />
        </>
    )
} 