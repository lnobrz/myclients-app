import UsersList from "../components/UsersList";
import { useState } from "react";
import UnauthenticatedPage from "../components/UnauthenticatedPage";
import { PageContainer } from "../components/StyledPage/styles";

const Home = () => {
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

  return isAuthenticated ? (
    <UsersList />
  ) : (
    <PageContainer>
      <UnauthenticatedPage />
    </PageContainer>
  );
};

export default Home;
