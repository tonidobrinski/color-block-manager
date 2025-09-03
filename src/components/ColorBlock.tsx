import { Color } from "../types/types";
import DeleteIcon from "../assets/icons/delete.svg?react";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import "../styles/ColorBlock.scss";

interface Props {
  color: string;
  colors: Color[];
  onChange: (newColor: string) => void;
  onDelete: () => void;
}

const ColorBlock = (props: Props) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="color-block">
      <Box
        display="flex"
        alignItems="center"
        bgcolor={props.color}
        p={1}
        borderRadius={1}
        color="#fff"
      >
        <Select
          className="select"
          value={props.color}
          onChange={handleChange}
          size="small"
          variant="standard"
          sx={{ color: "#fff", bgcolor: "transparent", mr: 1 }}
        >
          {props.colors.map((c) => (
            <MenuItem key={c.hex} value={c.hex}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
        <div className="delete-icon">
          <DeleteIcon className="button" onClick={props.onDelete} />
        </div>
      </Box>
    </div>
  );
};

export default ColorBlock;
