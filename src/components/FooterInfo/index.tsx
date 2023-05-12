import { InfoContainer, InfoTitle, InfoData } from "./styles";

type FooterInfoProps = {
  infoTitle: string;
  info: string;
};

const FooterInfo = ({ infoTitle, info }: FooterInfoProps) => {
  return (
    <InfoContainer>
      <InfoTitle>{infoTitle}:</InfoTitle>
      <InfoData>{info}</InfoData>
    </InfoContainer>
  );
};

export default FooterInfo;
