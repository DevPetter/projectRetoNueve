// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./page/Header";
import { Footer } from "./page/Footer";

import { BodyHome } from "./page/BodyHome";
import { OurChallenge } from "./page/OurChallenge";
import { HelpUs } from "./page/HelpUs";
import { Impact } from "./page/Impact";
import { Inscription } from "./page/Inscription";
import { NotFound } from "./page/NotFound";


export const LandingPage = () => {
  // const state = useState("Hola");
  // console.log(state);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BodyHome title="Reto nueve" />} />
        <Route path="reto" element={<OurChallenge />} />
        <Route path="impacto" element={<Impact/>}/>
        <Route path="inscribete" element={<Inscription/>}/>
        <Route path="apoyenos" element={<HelpUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};
