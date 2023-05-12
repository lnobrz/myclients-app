import SectionIntroduction from "./SectionIntroduction";
import Illustration from "../components/Illustration";
import LinkButton from "./LinkButton";
import unauthenticatedPageIllustration from "/unauthenticatedPageIllustration.svg";
import { PageContainer } from "../components/StyledPage/styles";
import { MainContent } from "../components/MainContent/styles";

const UnauthenticatedPage = () => {
  return (
    <PageContainer style={{ height: "1100%" }}>
      <MainContent>
        <SectionIntroduction
          title="You're not authenticated"
          description="To read users data you should authenticate yourself first. If you've already authenticated yourself and is still seing this message, your account probably doesn't have permission to see users data. Click on the button bellow to go to authentication page."
        />
        <Illustration path={unauthenticatedPageIllustration} />
        <LinkButton role="primary" url="/auth" text="Authenticate" />
      </MainContent>
    </PageContainer>
  );
};

export default UnauthenticatedPage;
