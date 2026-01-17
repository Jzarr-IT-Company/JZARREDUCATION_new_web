import { Spin } from "antd";
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alpha_merchant from "../Pages/Alpha_merchant";
import Thankyou from "../Pages/Thankyou";
const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const Layout = lazy(() => import("../Component/Layout/Layout"));
const AllCourses = lazy(() => import("../Pages/AllCourses"));
const PhysicalForm = lazy(() => import("../Pages/PhysicalForm"));
const ViewDetail = lazy(() => import("../Pages/ViewDetail"));
const Payment = lazy(() => import("../Pages/Payment"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const DashboardLayout = lazy(() => import("../Component/DashboardLayout/DashboardLayout"));
const Profile = lazy(() => import("../Pages/Profile"));
const ShowCOurses = lazy(() => import("../Pages/ShowCOurses"));
const SelectedCourese = lazy(() => import("../Pages/SelectedCourese"));
const FAQS = lazy(() => import("../Pages/FAQS"));
const TermsConditions = lazy(() => import("../Pages/TermsConditions"));
const Refund = lazy(() => import("../Pages/Refund"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));
const PageNoutFound = lazy(() => import("../Component/PageNotFound/PageNotFound"));
const About = lazy(() => import("../Pages/About"));
const QalificationUpdates = lazy(() => import("../Pages/QalificationUpdates"));
const Support = lazy(() => import("../Pages/Support"));
const Test = lazy(() => import("../Pages/Test"));
const JobsForm = lazy(() => import("../Pages/JobsForm"));
const MoreReviewsPage = lazy(() => import("../Pages/MoreReviewsPage"));
const Community = lazy(() => import("../Pages/Community"));
const SuuceessFullStoryPage = lazy(() => import("../Pages/SuuceessFullStoryPage"));
const Blogs = lazy(() => import("../Pages/Blogs"));
const Blogs1 = lazy(() => import("../Pages/BlogsPage1"));
const Blogs2 = lazy(() => import("../Pages/BlogsPage2"));
const Blogs3 = lazy(() => import("../Pages/BlogsPage3"));

// 

function Routing() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "/", element: <Home /> },
            { path: "/courses", element: <AllCourses /> },
            { path: "/detail", element: <ViewDetail /> },
            { path: "/about", element: <About /> },
            { path: "/faqs", element: <FAQS /> },
            { path: "/terms", element: <TermsConditions /> },
            { path: "/refund", element: <Refund /> },
            { path: "/policy", element: <PrivacyPolicy /> },
          ],
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/signup",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Signup />
            </Suspense>
          ),
        },
        {
          path: "/jobform",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <JobsForm />
            </Suspense>
          ),
        },
        {
          path: "/testform",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Test />
            </Suspense>
          ),
        },
        {
          path: "/physical",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <PhysicalForm />
            </Suspense>
          ),
        },
        {
          path: "/payment",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Payment />
            </Suspense>
          ),
        },
        {
          path: "/dashboard/",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <DashboardLayout />
            </Suspense>
          ),
          children: [
            { path: "", element: <Dashboard /> },
            { path: "profile", element: <Profile /> },
            { path: "editqualification", element: <QalificationUpdates /> },
            { path: "faqs", element: <Support /> },
            { path: "test", element: <Test /> },
            { path: "job", element: <JobsForm /> },
          ],
        },
        {
          path: "/showcourse/:id",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <ShowCOurses />
            </Suspense>
          ),
        },
        {
          path: "/buymorecourses",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <SelectedCourese />
            </Suspense>
          ),
        },
        {
          path: "/more reviews",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <MoreReviewsPage />
            </Suspense>
          ),
        },
        {
          path: "/student community",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Community />
            </Suspense>
          ),
        },
        {
          path: "/successfulstorys",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <SuuceessFullStoryPage />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <PageNoutFound />
            </Suspense>
          ),
        },
        {
          path: "/blogs",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Blogs />
            </Suspense>
          ),
        },
        {
          path: "/blogs1",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Blogs1 />
            </Suspense>
          ),
        },
        {
          path: "/blogs2",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Blogs2 />
            </Suspense>
          ),
        },
        {
          path: "/blogs3",
          element: (
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
              <Blogs3 />
            </Suspense>
          ),
        },
        {
          path: "/alpha_merchant",
          element: (
            <Alpha_merchant/>
          ),
        },
        ,
        {
          path: "/t",
          element: (
            <Thankyou/>
          ),
        },
      ]);
    
      return (
        <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spin size="large" />  </div>}>
          <RouterProvider router={router} />
        </Suspense>
      );
}

export default Routing