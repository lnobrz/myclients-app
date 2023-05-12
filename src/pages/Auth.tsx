import { useEffect, useState } from "react";
import SectionIntroduction from "../components/SectionIntroduction";
import LinkButton from "../components/LinkButton";
import authPageIllustration from "/authPageIllustration.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { storeAuth } from "../helpers/auth";
import AuthenticatedPage from "../components/AuthenticatedPage";
import { MainContent } from "../components/MainContent/styles";
import Illustration from "../components/Illustration";
import { PageContainer } from "../components/StyledPage/styles";

const Auth = () => {
  const storage = localStorage.getItem("authInfo");
  const credentials = storage && JSON.parse(storage);
  const [isAuthenticated] = useState(
    storage &&
      credentials &&
      credentials.situation === "valid" &&
      credentials.accessToken &&
      credentials.accessToken !== "undefined" &&
      credentials.locationId &&
      credentials.locationId !== "undefined" &&
      credentials.refreshToken &&
      credentials.refreshToken !== "undefined"
  );
  const navigate = useNavigate();
  const search = useLocation().search;

  const accessTokenParam = new URLSearchParams(search).get("accessToken");
  const locationIdParam = new URLSearchParams(search).get("locationId");
  const refreshTokenParam = new URLSearchParams(search).get("refreshToken");

  useEffect(() => {
    if (accessTokenParam && locationIdParam && refreshTokenParam) {
      storeAuth(accessTokenParam, locationIdParam, refreshTokenParam);
      navigate("/");
    }
  }, [accessTokenParam, locationIdParam, refreshTokenParam, navigate]);

  return (
    <PageContainer>
      {!isAuthenticated ? (
        <MainContent>
          <SectionIntroduction
            title="Authentication Required"
            description="To be able to read users information, you should authenticate yourself first. Click on the button bellow to start My Clients authentication proccess. Remember to select the TEST account, otherwise, even after login, you'll still not be able to access informations on this application and this screen will show up again."
          />
          <Illustration path={authPageIllustration} />
          <LinkButton
            role="primary"
            className="authPageButton"
            url="http://localhost:8080/"
            text="Authenticate"
          />
        </MainContent>
      ) : (
        <AuthenticatedPage />
      )}
    </PageContainer>
  );
};

export default Auth;
