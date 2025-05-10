import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Profile from './Profile';
import Courses from './Courses';
import Search from './Search';
import Saved from './Saved';
import React from 'react';
import OnboardingCard from "./LearnULanding";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<OnboardingCard />} /> 
        <Route path="search" element={<Search />} />
        <Route path="courses" element={<Courses />} />
        <Route path="saved" element={<Saved />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;