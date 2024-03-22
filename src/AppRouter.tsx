import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CalendarPage, LoginPage, SignUpPage } from "./ui/pages";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="auth">
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
      </Route>
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Route>
  )
);
