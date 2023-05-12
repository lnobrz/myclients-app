import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import CustomListItem from "../components/CustomListItem";
import SectionIntroduction from "../components/SectionIntroduction";
import DropdownList from "../components/DropdownList";
import { Box, List } from "@mui/material";
import Loader from "../components/Loader";
import UnauthenticatedPage from "../components/UnauthenticatedPage";

type UserDetails = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  extension: string;
  timezone: string;
  role: string;
  roleType: string;
  locationId: string;
  isAgencyOwner: string;
};

type UserPermissions = {
  funnelsEnabled: boolean;
  dashboardStatsEnabled: boolean;
  phoneCallEnabled: boolean;
  socialPlanner: boolean;
  workflowsReadOnly: boolean;
  botService: boolean;
  recordPaymentEnabled: boolean;
  contactsEnabled: boolean;
  tagsEnabled: boolean;
  websitesEnabled: boolean;
  campaignsReadOnly: boolean;
  appointmentsEnabled: boolean;
  refundsEnabled: boolean;
  assignedDataOnly: boolean;
  affiliateManagerEnabled: boolean;
  onlineListingsEnabled: boolean;
  marketingEnabled: boolean;
  cancelSubscriptionEnabled: boolean;
  attributionsReportingEnabled: boolean;
  membershipEnabled: boolean;
  settingsEnabled: boolean;
  invoiceEnabled: boolean;
  leadValueEnabled: boolean;
  contentAiEnabled: boolean;
  opportunitiesEnabled: boolean;
  reviewsEnabled: boolean;
  facebookAdsReportingEnabled: boolean;
  workflowsEnabled: boolean;
  bloggingEnabled: boolean;
  campaignsEnabled: boolean;
  conversationsEnabled: boolean;
  adwordsReportingEnabled: boolean;
  bulkRequestsEnabled: boolean;
  paymentsEnabled: boolean;
  triggersEnabled: boolean;
  agentReportingEnabled: boolean;
};

const UserDetails = () => {
  const search = useLocation().search;
  const userId = new URLSearchParams(search).get("userId");
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
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [userPermissions, setUserPermissions] =
    useState<UserPermissions | null>(null);
  const [showPermissions, setShowPermissions] = useState(false);

  const fetchData = useCallback(async () => {
    if (isAuthenticated) {
      const url = `https://services.leadconnectorhq.com/users/${userId}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${credentials.accessToken}`,
          Version: "2021-07-28",
          Accept: "application/json",
        },
      };

      try {
        const request = await fetch(url, options);
        const response = await request.json();

        setUserData({
          id: response.id,
          name: response.name,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          phone: response.phone,
          extension: response.extension,
          timezone: response.locationWiseTimezone.tqQPGR1TwyW47m4078uu,
          role: response.roles.type,
          roleType: response.roles.type,
          locationId: response.roles.locationIds[0],
          isAgencyOwner: response.isAgencyOwner.toString(),
        });
        setUserPermissions(response.permissions);
      } catch (error) {
        console.log(error);
      }
    }
  }, [credentials.accessToken, isAuthenticated, userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box margin="30px">
      {isAuthenticated && userData && (
        <>
          <SectionIntroduction title={userData.name} />
          <List>
            {Object.entries(userData).map(([key, value]) => {
              return (
                <CustomListItem key={key} primary={key} secondary={value} />
              );
            })}
            {userPermissions && (
              <DropdownList
                listTitle="Permissions"
                dropdownCondition={showPermissions}
                listItems={userPermissions}
                dropdownConditionSetter={setShowPermissions}
              />
            )}
          </List>
        </>
      )}
      {isAuthenticated && !userData && <Loader />}
      {!isAuthenticated && <UnauthenticatedPage />}
    </Box>
  );
};

export default UserDetails;
