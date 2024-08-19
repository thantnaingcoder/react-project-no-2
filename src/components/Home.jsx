import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import NavBar from "./NavBar";
import MainNavBar from "./MainNavBar";
import Slider from "./Slider";


const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>
        <MainNavBar/>
        <Slider/>
        


    </>
  );
};

export default Home;
