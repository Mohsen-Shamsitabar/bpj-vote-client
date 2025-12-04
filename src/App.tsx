import ROUTES from "@/constants/routes.ts";
import LoginPage from "@/pages/LoginPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
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
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
