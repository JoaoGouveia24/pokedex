import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Poke({name , image, types}) {

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name.toUpperCase()+" | "+ types[1].type.name.toUpperCase();
    }
    return types[0].type.name.toUpperCase();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="290"
          image={image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.toUpperCase()}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" fontSize={"15px"}>
            {typeHandler()}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}