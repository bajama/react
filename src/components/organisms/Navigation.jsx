import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AiFillHome, AiOutlineFolderAdd } from "react-icons/ai";
import AddPost from "../organisms/modal/AddPost";
import { BackDrop } from "../atoms";
const Navigation = () => {
  let { pathname } = useLocation();
  const [showAddModal, setshowAddModal] = useState();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [pathname]);

  return (
    <>
      {isShow && (
        <NavBox>
          <NavContainer>
            <Logo>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </Logo>
            <Search>
              <input type="text" placeholder="검색" />
            </Search>
            <Icons>
              <AiFillHome />
              <Message />
              <AiOutlineFolderAdd onClick={() => setshowAddModal(true)} />
              <Like />
              <MyPage />
            </Icons>
          </NavContainer>
        </NavBox>
      )}
      {showAddModal && <AddPost />}
      {showAddModal && <BackDrop onClick={() => setshowAddModal(false)} />}
    </>
  );
};
const NavBox = styled.div`
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: aqua;
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 54px;
  /* max-width: 975px;
  padding: 0 20px;
  transition: height 0.2s ease-in-out; */
  /* width: 100%; */
  z-index: 10;
  background-color: #ff8886;
`;
const Logo = styled.div``;
const Search = styled.div``;
const Icons = styled.div`
  display: flex;
`;
const Message = styled.div``;
const Like = styled.div``;
const MyPage = styled.div``;

export default Navigation;
