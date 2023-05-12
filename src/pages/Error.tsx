import SectionIntroduction from "../components/SectionIntroduction";
import Illustration from "../components/Illustration";
import LinkButton from "../components/LinkButton";
import errorPageIllustration from "/errorPageIllustration.svg";
import { PageContainer } from "../components/StyledPage/styles";
import { MainContent } from "../components/MainContent/styles";

const ErrorPage = () => {
  return (
    <PageContainer>
      <MainContent>
        <SectionIntroduction
          title="Something Went Wrong"
          description="A unexpected error happened. Maybe the page you're looking for doesn't exist/has been removed or you're not authenticated. Go back to homr screen or try again later."
        />
        <Illustration path={errorPageIllustration} />
        <LinkButton role="primary" url="/" text="Home" />
      </MainContent>
    </PageContainer>
  );
};

export default ErrorPage;
