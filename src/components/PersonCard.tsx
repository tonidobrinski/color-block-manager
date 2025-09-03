import { Person, Color } from "../types/types";
import ColorBlock from "../components/ColorBlock";
import { Card, CardContent, Typography } from "@mui/material";
import UserPlusIcon from "../assets/icons/user-plus.svg?react";
import "../styles/PersonCard.scss"

interface Props {
  person: Person;
  colors: Color[];
  onAddBlock: (personId: string) => void;
  onChangeColor: (personId: string, blockId: string, newColor: string) => void;
  onRemoveBlock: (personId: string, blockId: string) => void;
}

const PersonCard = (props: Props) => {
  return (
    <div className="card-container">
      <Card sx={{ mb: 3 }}>
        <CardContent className="card-container">
          <button className="icon-button" onClick={() => props.onAddBlock(props.person.id)}>
            <UserPlusIcon />
          </button>
          <div className="colorBlock">
            {props.person.blocks.map((block) => (
              <ColorBlock
                key={block.id}
                color={block.color}
                colors={props.colors}
                onChange={(newColor) =>
                  props.onChangeColor(props.person.id, block.id, newColor)
                }
                onDelete={() => props.onRemoveBlock(props.person.id, block.id)}
              />
            ))}
          </div>
          <div className="color-block__name">
          <Typography variant="h6">{props.person.name}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonCard;
