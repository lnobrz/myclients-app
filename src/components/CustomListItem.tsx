import { ListItem, ListItemButton, ListItemText } from "@mui/material";

type CustomListItemProps = {
  primary: string;
  secondary?: string;
};

const CustomListItem = ({ primary, secondary }: CustomListItemProps) => {
  return (
    <ListItem disablePadding divider={true}>
      <ListItemButton disableGutters={true}>
        <ListItemText
          primary={primary}
          secondary={secondary !== "" ? secondary : "N/A"}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
