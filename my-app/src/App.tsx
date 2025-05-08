import React from "react";
import { CssBaseline, Container } from "@mui/material";
import OnboardingCard from "./components/LearnULanding";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <OnboardingCard />
      </Container>
    </>
  );
};

export default App;
