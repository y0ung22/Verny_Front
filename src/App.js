import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ArtPage from "./pages/ArtPage";
import ArtDetailPage from "./pages/ArtDetailPage";
import CommentPage from "./pages/CommentPage";
import PlacePage from "./pages/PlacePage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import MyPage from "./pages/MyPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import BookmarkPage from "./pages/BookmarkPage";
import ReCommentPage from "./pages/ReCommentPage";
import UploadArtPage from "./pages/UploadArtPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        {/*로그인 및 회원가입*/}
        <Route exact path="/" element={<StartPage />} />
        <Route path="/account/signup" element={<SignupPage />} />
        <Route path="/account/login" element={<LoginPage />} />
        {/*메인 화면*/}
        <Route path="/art" element={<ArtPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/place" element={<PlacePage />} />
        <Route path="/mypage" element={<MyPage />} />
        {/*세부 화면*/}
        <Route path="/art/upload" element={<UploadArtPage />} />
        <Route path="/art/detail" element={<ArtDetailPage />} />
        <Route path="/art/detail/comment" element={<CommentPage />} />
        <Route path="/art/detail/comment/re" element={<ReCommentPage />} />
        <Route path="/place/detail" element={<PlaceDetailPage />} />
        <Route path="/mypage/profile" element={<ProfilePage />} />
        <Route path="/mypage/bookmark" element={<BookmarkPage />} />
        <Route path="/mypage/profile/edit" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
