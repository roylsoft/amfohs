import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import ProjectPage from './pages/ProjectPage';
import MemberPage from './pages/MemberPage';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import CreateProject from './pages/CreateProject';
import UpdateProject from './pages/UpdateProject';
import CreateMember from './pages/CreateMember';
import UpdateMember from './pages/UpdateMember';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Search1 from './pages/Search1';
import Search2 from './pages/Search2';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search1' element={<Search1 />} />
        <Route path='/search2' element={<Search2 />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
          <Route path='/create-project' element={<CreateProject />} />
          <Route path='/update-project/:projectId' element={<UpdateProject />} />
          <Route path='/create-member' element={<CreateMember />} />
          <Route path='/update-member/:memberId' element={<UpdateMember />} />
        </Route>

        {/* <Route path='/projects' element={<Projects />} /> */}
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/project/:projectSlug' element={<ProjectPage />} />
        <Route path='/member/:memberSlug' element={<MemberPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
