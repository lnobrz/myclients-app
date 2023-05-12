import styled from "styled-components";

export const ButtonContainer = styled.a<{ role: "primary" | "secondary" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: ${(props) =>
    props.role === "primary" ? "#161a1d" : "transparent"};
  border-radius: 5px;
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => (props.role === "primary" ? "#ffffff" : "#161a1d")};
  text-decoration: none;
  border: ${(props) =>
    props.role === "primary" ? "none" : "1px solid #161a1d"};

  &:hover {
    background: ${(props) =>
      props.role === "primary" ? "#232729" : "transparent"};
  }
`;
