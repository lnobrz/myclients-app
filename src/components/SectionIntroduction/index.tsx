import {
  IntroductionContainer,
  SectionTitle,
  SectionDescription,
} from "./styles";

type SectionIntroductionProps = {
  title: string;
  description?: string;
};

const SectionIntroduction = ({
  title,
  description = "",
}: SectionIntroductionProps) => {
  return (
    <IntroductionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </IntroductionContainer>
  );
};

export default SectionIntroduction;
