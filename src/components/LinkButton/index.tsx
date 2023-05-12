import { ButtonContainer } from "./styles";

type ContainedButtonProps = {
  text: string;
  url: string;
  className?: string;
  role: "primary" | "secondary";
  onClick?: () => void;
};
const LinkButton = ({
  text,
  url,
  className,
  role,
  onClick,
}: ContainedButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      role={role}
      className={className}
      href={url}
    >
      {text}
    </ButtonContainer>
  );
};

export default LinkButton;
