import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import {deleteNote} from '../service/Services'


class NoteMore extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    id:""
  };
  
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    let id=this.props.id
    deleteNote(id)
    console.log(id,"d")
    axios.delete("http://127.0.0.1:8000/api/note/"+id,)
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(this.props.id,"delete id")
    return (
      <div >
       
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                 <MoreIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Delete Note</MenuItem>
                  <MenuItem onClick={this.handleClose}>Add Note</MenuItem>
                </Menu>
              </div>
            )}
          
      </div>
    );
  }
}



export default NoteMore