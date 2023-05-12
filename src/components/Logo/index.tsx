import darkLogo from "/darkLogo.svg";
import lightLogo from "/lightLogo.svg";
import { LogoContainer, LogoLink } from "./styles";

type LogoProps = {
  variation: "light" | "dark";
  className?: string;
};

const Logo = ({ variation, className }: LogoProps) => {
  return (
    <LogoContainer className={className}>
      <LogoLink href="/">
        <img
          src={variation === "dark" ? darkLogo : lightLogo}
          alt="logo"
          width="100%"
          height={"100%"}
        />
      </LogoLink>
    </LogoContainer>
  );
};

export default Logo;
