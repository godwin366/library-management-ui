import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ITEM_HEIGHT = 48;
interface IProps {
  options: { label: string; onClick: (_?: any) => void }[];
  row: any;
}

const ActionMenu: React.FC<IProps> = ({ options, row }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="list-wrapper"
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "fit-content",
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            // selected={option === "Pyxis"}
            onClick={() => {
              handleClose();
              option.onClick(row);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ActionMenu;
