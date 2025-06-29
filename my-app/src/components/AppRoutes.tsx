import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Profile from '../pages/Profile';
import Courses from '../pages/Courses';
import Search from '../pages/Search';
import Saved from '../pages/Saved';
import React from 'react';
import Home from '../pages/Home';
import OnboardingCard from "./LearnULanding";

function AppRoutes() {
  return (
    <Routes>
        <Route index element={<OnboardingCard />} /> 
        <Route path="/main" element={<MainLayout />}>
        <Route index element={<Home />} />  
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="courses" element={<Courses />} />
        <Route path="saved" element={<Saved />} />
        <Route path="profile" element={<Profile />} />
</Route>
   
    </Routes>
  );
}

export default AppRoutes;