import SectionIntroduction from "./SectionIntroduction";
import Illustration from "../components/Illustration";
import LinkButton from "./LinkButton";
import authenticatedPageIllustration from "/authenticatedPageIllustration.svg";
import { PageContainer } from "../components/StyledPage/styles";
import { MainContent } from "../components/MainContent/styles";
import { ButtonGroup } from "./ButtonGroup/styles";

const AuthenticatedPage = () => {
  return (
    <PageContainer>
      <MainContent>
        <SectionIntroduction
          title="You're already authenticated."
          description="Your authentication token is still valid, but if something is wrong, just click on the authenticate button bellow to authenticate again."
        />
        <Illustration path={authenticatedPageIllustration} />
        <ButtonGroup>
          <LinkButton
            role="secondary"
            url="/localhost:8080"
            text="Authenticate"
          />
          <LinkButton role="primary" url="/" text="Home" />
        </ButtonGroup>
      </MainContent>
    </PageContainer>
  );
};

export default AuthenticatedPage;
