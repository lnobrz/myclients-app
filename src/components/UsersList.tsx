import { useEffect, useState } from "react";
import { List, Box } from "@mui/material";
import ListItem from "./ListItem";
import SectionIntroduction from "./SectionIntroduction";
import Loader from "./Loader";
import { refreshAuth } from "../helpers/auth";
import UnauthenticatedPage from "./UnauthenticatedPage";

type UsersList = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  extension: string;
  permissions: {
    campaignsEnabled: boolean;
    campaignsReadOnly: boolean;
    contactsEnabled: boolean;
    workflowsEnabled: boolean;
    workflowsReadOnly: boolean;
    triggersEnabled: boolean;
    funnelsEnabled: boolean;
    websitesEnabled: boolean;
    opportunitiesEnabled: boolean;
    dashboardStatsEnabled: boolean;
    bulkRequestsEnabled: boolean;
    appointmentsEnabled: boolean;
    reviewsEnabled: boolean;
    onlineListingsEnabled: boolean;
    phoneCallEnabled: boolean;
    conversationsEnabled: boolean;
    assignedDataOnly: boolean;
    adwordsReportingEnabled: boolean;
    membershipEnabled: boolean;
    facebookAdsReportingEnabled: boolean;
    attributionsReportingEnabled: boolean;
    settingsEnabled: boolean;
    tagsEnabled: boolean;
    leadValueEnabled: boolean;
    marketingEnabled: boolean;
    agentReportingEnabled: boolean;
    botService: boolean;
    socialPlanner: boolean;
    bloggingEnabled: boolean;
    invoiceEnabled: boolean;
  };
  roles: {
    type: string;
    role: string;
    locationIds: string[];
  };
  deleted: boolean;
}[];

const UsersList = () => {
  const storage = localStorage.getItem("authInfo");
  const authData = storage && JSON.parse(storage);

  const [usersList, setUsersList] = useState<UsersList | null>(null);

  useEffect(() => {
    if (
      authData &&
      authData.accessToken &&
      authData.locationId &&
      authData.situation === "valid"
    ) {
      const url = `https://services.leadconnectorhq.com/users/?locationId=${authData.locationId}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authData.accessToken}`,
          Version: "2021-04-15",
          Accept: "application/json",
        },
      };

      try {
        fetch(url, options)
          .then((response) => response.json())
          .then((res) => setUsersList(res.users));
      } catch (error) {
        console.error(error);
      }
    }
  }, [authData, usersList]);

  useEffect(() => {
    if (
      authData &&
      authData.accessToken &&
      authData.locationId &&
      authData.situation === "expired"
    ) {
      refreshAuth();
    }
  }, [authData]);

  return (
    <section>
      {authData &&
        authData.accessToken &&
        authData.locationId !== "undefined" &&
        authData.situation === "valid" &&
        usersList && (
          <Box margin="30px" height="calc(100vh - 450px)">
            <SectionIntroduction
              title="Users"
              description="Click on a user to see details."
            />
            <Box
              height="80%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <List>
                {usersList &&
                  usersList.map((user) => {
                    return (
                      <ListItem
                        key={user.id}
                        title={user.name}
                        url={`/user-details/?userId=${user.id}`}
                      ></ListItem>
                    );
                  })}
              </List>
            </Box>
          </Box>
        )}
      {authData &&
        authData.accessToken &&
        authData.locationId !== "undefined" &&
        authData.situation === "valid" &&
        !usersList && (
          <Box margin="30px">
            <Loader />
          </Box>
        )}
      {!authData && <UnauthenticatedPage />}
    </section>
  );
};

export default UsersList;
