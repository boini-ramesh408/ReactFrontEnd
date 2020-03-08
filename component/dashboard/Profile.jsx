import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import axios from 'axios'
import Logout from '../fundooApp/Logout';
import { Avatar,Dialog,DialogTitle,DialogContent,
          DialogContentText} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import CameraAltIcon from "@material-ui/icons/CameraAlt";


const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));
export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl,url] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [file,setFile] = React.useState('');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleOpenFileChange = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFileChange = e => {
    console.log(e.target.files[0],'----->')
     setFile(e.target.files[0]);
    //  localStorage.setItem("image",e.target.files[0])
    
  };

  const handleFileSubmitChange = (e) => 
  {  
   
    const fd=new FormData()
        fd.append("bridge",file,file.name)
    //     Axios.post("http://127.0.0.1:8000/api/uploadImage/",fd)
    
    // console.log("fgf",data)
    let token=localStorage.getItem('token')

    axios.post("http://127.0.0.1:8000/api/uploadImage/",fd)

      .then(Response => {
        console.log("profle update success",Response.data);
        localStorage.setItem("profile",Response.data)
        
      })

      .catch(err => 
        {
        console.log("profile not  update",err);
        });
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : null;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Avatar
        //  src ="'https://s3-imageupload.s3-ap-south-1.amazonaws.com/hyd.jpg'"
        src={localStorage.getItem("profile")}
          onClick={handleClick}
        />
      </div>
      <Popover style={{ top: "5%" }} id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}

        transformOrigin={{ vertical: "top", horizontal: "right" }}  >
        <Typography className={classes.typography}>

          <div className="mainprofle">
            <div
              style={{ justifyContent: "center", display: "flex", top: "3%" }}
            >
              <Badge overlap="circle" anchorOrigin={{ vertical: "bottom", horizontal: "right"  }}

                badgeContent={
                  <CameraAltIcon  style={{ backgroundColor: "white", borderRadius: "50%" }}
                    onClick={HandleOpenFileChange} />  }  >

                <Avatar alt={localStorage.getItem("username")}
                  src={localStorage.getItem("profile")}
                  //  src ="https://profile-pic-storer.s3-ap-south-1.amazonaws.com/hyd.jpg"

                  style={{ width: "77px", height: "77px" }} />

              </Badge>
              
            </div>
            <div>
            {localStorage.getItem("username")}
            </div>
            <div>
            {localStorage.getItem("email")}
            </div>
            
            <div >

             Your Fundoo Account
            </div>  
            <Divider /> 
            <div> <Logout /> </div>
            <Divider />
            </div>
            </Typography>
            </Popover>
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="changeProfile" >
        <DialogTitle id="max-width-dialog-title"
          style={{ display: 'flex', justifyContent: 'center',  fontSize:' x-large',
            fontfamily: 'monospace', fontStyle: 'unset' }} >
            changeProfile 
            </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              style={{ display: "flex", justifyContent: "space-around", flexDirection:'column',
                width: '100%' }} >
              <div style={{ display: "flex", justifyContent: "center", }} >
                <input type="file" onChange={handleFileChange} name="profile"/>
              </div>
              <div
               style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection:'row',
                paddingTop: '22%'
              }} >
                <Button variant="contained" color="secondary" onClick={handleFileSubmitChange} >
                  Upload
                </Button>
                <Button variant="contained" color="primary" onClick={handleCloseDialog} >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}


// import React, { Component } from 'react'
// import Axios from 'axios'

// export class SimplePopover extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        file:"",
//     }
//   }
//   fileSelecthandler =e=>{
//     this.setState({
//       file:e.target.files[0]
//     })
    
//   }
//   fileUploadHandler=()=>{
//     const fd=new FormData()
//     fd.append("bridge",this.state.file,this.state.file.name)
//     Axios.post("http://127.0.0.1:8000/api/uploadImage/",fd)
//   }
  
//   render() {
//     return (
//       <div className="app">
//         <input type="file" onChange={this.fileSelecthandler}/>
//         <button onClick={this.fileUploadHandler}>upload</button>
//         </div>

//     )
//   }
// }

// export default SimplePopover
