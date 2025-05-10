import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Profile from './Profile';
import Courses from './Courses';
import Search from './Search';
import Saved from './Saved';
import React from 'react';
import Home from './Home';
import OnboardingCard from "./LearnULanding";

function AppRoutes() {
  return (
    <Routes>
        <Route index element={<OnboardingCard />} /> 
        <Route path="/main" element={<MainLayout />}>
        <Route index element={<Home />} />  // Default child route
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