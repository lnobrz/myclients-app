import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";

type DropdownListProps = {
  listTitle: string;
  dropdownCondition: boolean;
  dropdownConditionSetter: (dropdownCondition: boolean) => void;
  listItems: object;
};

const DropdownList = ({
  listTitle,
  dropdownCondition,
  dropdownConditionSetter,
  listItems,
}: DropdownListProps) => {
  return (
    <>
      <ListItemButton
        onClick={() => dropdownConditionSetter(!dropdownCondition)}
        disableGutters={true}
      >
        <ListItemText primary={listTitle} />
        {dropdownCondition ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={dropdownCondition} timeout="auto" unmountOnExit>
        <List component="ul" disablePadding>
          {Object.entries(listItems).map(([key, value]) => {
            return (
              <ListItemButton key={key} sx={{ pl: 4 }}>
                <ListItemText primary={key} secondary={value.toString()} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default DropdownList;
