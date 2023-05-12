import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 800px) {
    width: 50%;
  }

  @media (min-width: 1000px) {
    width: 40%;
  }
`;
