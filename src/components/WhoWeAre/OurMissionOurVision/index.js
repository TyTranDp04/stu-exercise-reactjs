import React from "react";
import { dataContent, dataList } from "../../../constants/ourteam";
import {
  Body,
  Container,
  HeaderContent,
  Hr,
  Li,
  MainWrapper,
  Strong,
  TextContent,
  Ul,
  Wrapper,
} from "./style";

const OurMissionOurVision = ({ Ov, Om, content }) => {
  return (
    <Container className="container-fluid">
      <Body className="container">
        <HeaderContent className="text-start">
          {dataContent.map((text) => (
            <div key={text.id}>
              <TextContent>{text.text}</TextContent>
            </div>
          ))}
          <TextContent>
            <Strong>{Ov}</Strong>: {content}
          </TextContent>
          <TextContent>
            <Strong>{Om}</Strong>:
          </TextContent>
          {dataList.map((text) => (
            <Ul key={text.id}>
              <Li>{text.textLi}</Li>
            </Ul>
          ))}
        </HeaderContent>
        <MainWrapper>
          <Wrapper>
            <Hr></Hr>
          </Wrapper>
        </MainWrapper>
      </Body>
    </Container>
  );
};

export default OurMissionOurVision;
