import ROUTES from "@/constants/routes.ts";
import LoginPage from "@/pages/LoginPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import OtpPage from "@/pages/OtpPage.tsx";
import VoteConfirmedPage from "@/pages/VoteConfirmedPage.tsx";
import VoterInformationPage from "@/pages/VoterInformationPage.tsx";
import VotingPage from "@/pages/VotingPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path={ROUTES.HOME_PAGE}
            element={<LoginPage />}
          />
          <Route
            path={ROUTES.OTP_PAGE}
            element={<OtpPage />}
          />

          <Route
            path={ROUTES.VOTER_INFO_PAGE}
            element={<VoterInformationPage />}
          />

          <Route
            path={ROUTES.VOTING_PAGE}
            element={<VotingPage />}
          />

          <Route
            path={ROUTES.VOTE_CONFIRMED_PAGE}
            element={<VoteConfirmedPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
