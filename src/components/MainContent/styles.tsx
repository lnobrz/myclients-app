import styled from "styled-components";
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 30px;
  width: 100%;

  @media (min-width: 1000px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }

  @media (min-width: 1400px) {
    width: 70%;
  }

  @media (min-width: 1600px) {
    width: 60%;
  }
`;
