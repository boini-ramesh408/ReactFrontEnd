
import React from 'react';
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import EditLabels from '../editComponents/EditLabels'
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {DisplayAllLabel} from '../service/Services'


export default function NotesDrawer(props) {
  // const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [allLable]=React.useState([])
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const componentWillMount=()=>{
    getAllLabel();
  }

  const getAllLabel = () => {
    console.log("entering inside")
    let token = localStorage.getItem("token");

    DisplayAllLabel(token)
      .then(Response => {
        let array = [];
        console.log(Response,"enter2")
        Response.data.data.forEach(element => {
          array.push(element);
          console.log(array,"ar1")
        });
        this.setState({ allLable: array });
        console.log("ALL LABELS")
      })
      .catch(err => { console.log("label not found"); });
  };
 
  console.log(allLable,"jjjj")
  return (
    <div className="root">
      <CssBaseline />
      <Toolbar>
        <div color="inherit" aria-label="open drawer"
          onClick={handleDrawerOpen} edge="start"
          className={clsx("menuButton", open && "hide")}
        >
          <MenuIcon className="a" />
        </div>
      </Toolbar>
      <div className="drawer-side">
        <Drawer
          className="drawer"
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: "drawerPaper",
          }}>

          <div className='drawerHeader'>
            <div onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </div>
          </div> 

          <Divider />

            <ListItem className="over" button onClick={() => props.showNoteclick()} >
              <ListItemIcon > <EmojiObjectsOutlinedIcon /> </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem> 

            <ListItem className="over" button onClick={() => props.showReminderclick()}>
              <ListItemIcon> <AddAlertOutlinedIcon /> </ListItemIcon>
              <ListItemText primary="Reminders" />
            </ListItem>
            
          <Divider />
{/*           
            <ListItem className="over" button onClick={() => props.showLabelClick()}>
                <ListItemIcon>
                <EditIcon/>
              </ListItemIcon>
              <ListItemText primary="Edit Labels" />
            </ListItem>      */}

              <div  class="JNdkSc-tJHJj"
                style={{ paddingLeft: "10%",paddingTop: "5%",paddingBottom: "5%" }} >
                Labels
              </div>
              <List>
                {allLable.map(label => (
                  
                  // console.log(label,"hello")
                  <ListItem  
                   
                  onClick={() => {
                    console.log('labelid---'+label.id);
                    
                    this.props.label_id(label.id)
                    this.props.showLabelClick(label)
                  }}

                    button key="label" className="over" >
                    <ListItemIcon> <LabelOutlinedIcon /> </ListItemIcon>
                    <div > {label.name}</div>
                    </ListItem>
                ))}

                <ListItem  className="over">
                  <EditOutlinedIcon />
                  <div style={{ paddingLeft: "31px" }}>
                    <EditLabels   refresh={getAllLabel} />
                  </div>
                </ListItem>
              </List>



              {/* // */}

            <ListItem className="over" button onClick={() => props.showArchieveclick()} >
              <ListItemIcon> <ArchiveIcon/> </ListItemIcon>
              <ListItemText primary="Archieve" />
            </ListItem>     

            <ListItem className="over" button onClick={() => props.showTrashclick()} >
              <ListItemIcon> <DeleteIcon/> </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem> 

        </Drawer>
      </div>
    </div>
  );
}

