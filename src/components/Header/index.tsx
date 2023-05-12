import LinkButton from "../LinkButton";
import Logo from "../Logo";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo variation="dark" className="headerLogo" />
      <LinkButton
        text="Unauthenticate"
        url="/"
        role="primary"
        className="headerButton"
        onClick={() => localStorage.clear()}
      />
    </HeaderContainer>
  );
};

export default Header;
