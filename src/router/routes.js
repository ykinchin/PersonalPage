import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import EmploeesPage from "../pages/emploeesPage/EmploeesPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import UserCvPage from "../pages/userPages/UserCvPage";
import UserJobs from "../pages/userPages/UserJobs";
import UserPostJob from "../pages/userPages/UserPostJob";

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/registration", element: <RegisterPage /> },
  { path: "/employees", element: <EmploeesPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const privateRoutes = [
  { path: "/user/cvs", element: <UserCvPage /> },
  { path: "/user/followed-jobs", element: <UserJobs /> },
  { path: "/user/post-a-job", element: <UserPostJob /> },
];
