import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PplCard({email, firstName, lastName, avatar}) { //when to use destructuring ? also, props for {}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={avatar}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {firstName} {lastName}  
      {/*  {firstName + " " lastName} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={avatar} size="small">Thumbnail Pic</Button>
        
      </CardActions>
    </Card>
  );
}