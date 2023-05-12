export const storeAuth = (
  accessToken = "undefined",
  locationId = "undefined",
  refreshToken = "undefined"
) => {
  localStorage.setItem(
    "authInfo",
    JSON.stringify({
      situation: "valid",
      accessToken: accessToken,
      locationId: locationId,
      refreshToken: refreshToken,
    })
  );

  setInterval(() => {
    refreshAuth();
  }, 85399000);
};

export const refreshAuth = async () => {
  const storage = localStorage.getItem("authInfo");
  const authInfo = storage && JSON.parse(storage);
  await fetch(
    `http://localhost:8080/refresh-token?refreshToken=${authInfo.refreshToken}`
  )
    .then((res) => res.json())
    .then((res) => {
      storeAuth(res.accessToken, res.locationId, res.refreshToken);
    });
};
