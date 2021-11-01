import styled from "styled-components";
import Content from "../organisms/Content";
import { postList, instance } from "../../api";
import { shortsList } from "../../api/shortList";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    instance.get("/");
  }, []);
  return (
    <MainBox>
      <UserBox>
        {shortsList.map((data) => (
          <UserBoxCont>
            <Img src={data.user.profileImage} />
            <UserName>{data.user.name}유저네임</UserName>
          </UserBoxCont>
        ))}
      </UserBox>
      <ContContainer>
        {postList.map((data) => (
          <Content data={data} />
        ))}
      </ContContainer>
      <RecomendContainer></RecomendContainer>
    </MainBox>
  );
};

const MainBox = styled.div`
  margin-top: 54px;
`;
const ContContainer = styled.div``;
const RecomendContainer = styled.div``;
const UserBox = styled.div``;
const UserBoxCont = styled.div``;
const Img = styled.img``;
const UserName = styled.div``;

export default MainPage;
