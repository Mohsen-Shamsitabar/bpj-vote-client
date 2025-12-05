import ROUTES from "@/constants/routes.ts";
import LoginPage from "@/pages/LoginPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import OtpPage from "@/pages/OtpPage.tsx";
import VoterInformationPage from "@/pages/VoterInformationPage.tsx";
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
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
