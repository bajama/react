import styled from "styled-components";

const Content = ({ data }) => {
  return (
    <ContBox>
      <TopBox>
        <UserName>{data.user.name}유저네임</UserName>
      </TopBox>
      {data.imageList.map((src) => (
        <Img src={src.image} />
      ))}
      <IconBox></IconBox>
      <Like></Like>
      <Cont>{data.content}콘텐츠</Cont>
    </ContBox>
  );
};
const ContBox = styled.div``;
const TopBox = styled.div``;
const UserName = styled.div``;
const Img = styled.img``;
const IconBox = styled.div``;
const Like = styled.div``;
const Cont = styled.div``;

export default Content;
