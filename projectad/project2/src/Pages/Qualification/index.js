/*export default function Qualification(){
    return(
        <>
        This is Qualification Page of Adithya
        </>
    )
}*/
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="C:\Users\saiad\Downloads\scit.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SREE CHAITNYA INSTUTE OF TECHNOLOGICAL SCIENCES "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — B Com Computer Applications, Information Technology"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="ALPHORES JUNIOR COLLEGE "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                88% CGPA
              </Typography>
              {" — Intermediate studies with Computers & Commerce"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="St.josephs high school"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                80% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}