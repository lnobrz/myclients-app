import Logo from "../Logo";
import FooterInfo from "../FooterInfo";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo variation="light" className="footerLogo" />
      <FooterInfo
        infoTitle="Server Source Code"
        info="https://github.com/lnobrz/myclients-backend"
      />
      <FooterInfo
        infoTitle="Client Source Code"
        info="https://github.com/lnobrz/myclients-frontend"
      />
    </FooterContainer>
  );
};

export default Footer;
