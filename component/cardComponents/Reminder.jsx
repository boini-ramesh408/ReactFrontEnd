import React from 'react';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import CreateNote from '../create/CreateNote';

export default class Reminder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            custom: false,
            anchorEl: null,
            reminder:"",
        };
    }

  
   

    handleReminder = (event) => {
        this.setState({
            active: true,
            anchorEl:event.currentTarget
        });
        
        if(typeof(this.props.handleButtonShow)==='function'){
            this.props.handleButtonShow()
        }
    }
    HandleChangeReminderr=()=>{
        this.props.HandleChangeReminder(this.state.reminder)

    }
    handleClickAway = () => {
        this.setState({
            active: false,
        });
        if(typeof(this.props.handleButtonHide)==='function'){
            this.props.handleButtonHide()
        }
        
    }

    handleCustom = (event) => {
        const { currentTarget } = event;
        this.setState({
            custom: !this.state.custom,
            anchorEl: currentTarget,
        });
    }

    handleToday = () => {
        
        var d = new Date();
        var date = d.getDate();
        console.log(date)
        var year = d.getFullYear();
        var month = d.getMonth();
        var getdata = moment(new Date(year, month, date, 8)).format('YYYY-MM-DD h:mm:ss');
        console.log(getdata)
         this.props.onSelectReminder(getdata);
    
    }

    handleTomorrow = () => {
        var d = new Date();
        var date = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();
        d = new Date(year, month, date + 1, 8);
        var s = moment(d).format('DD MM YYYY , h:mm a');
     
    }

    render() {
        

        return (
            <div >
                <ClickAwayListener onClickAway={this.handleClickAway} >
                    <div>
                        <div className='note-icon-div' role='Button' onClick={this.handleReminder} >
                         <AddAlertOutlinedIcon/> 

                        </div>
                        <div style={(this.props.Parent==='NoteEdit'&&this.props.ImagesLength===0)?{position:'fixed'}:{}}>
                        <Popper anchorEl={this.state.anchorEl} className='reminder-popper' style={{ position: 'fixed' }} open={this.state.active} transition disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        
                                        <Paper>
                                        
                                            <MenuList>
                                                
                                                <Typography align='center'>Reminder:</Typography>
                                                <MenuItem onClick={this.handleToday} >Later Today</MenuItem>
                                                <MenuItem onClick={this.handleTomorrow} >Tommorow</MenuItem>
                                                <MenuItem onClick={this.handleCustom} >Next Week</MenuItem>
                                                <Popper open={this.state.custom} anchorEl={this.state.anchorEl} transition disablePortal
                                                    placement={'right-end'}
                                                >
                                                    {({ TransitionProps, placement }) => (
                                                        <Grow
                                                            {...TransitionProps}
                                                            style={{ transformOrigin: 'center bottom' }}
                                                        >
                                                         <Paper>
                                                                <MenuList>

                                                                    <MenuItem  ><TextField
                                                                        onChange={this.customDate}
                                                                        id="datetime-local"
                                                                        label="Select date"
                                                                        type="datetime-local"

                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    /></MenuItem>

                                                                </MenuList>
                                                            </Paper>
                                                        </Grow>
                                                    )}
                                                </Popper>
                                            </MenuList>
                                        </Paper>

                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </ClickAwayListener>
        
            </div>
        );
    }
}



// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Popover from "@material-ui/core/Popover";
// import "../Cssfile/addReminder.css";
// import Datetimepicker from "./Datetimepicker";
// import {  Tooltip } from "@material-ui/core";
// import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
// import Snackbar from '@material-ui/core/Snackbar';
// import CloseIcon from '@material-ui/icons/Close';
// import Button from '@material-ui/core/Button';
// import { Divider, IconButton } from "@material-ui/core";

// const styles = theme => ({
//   typography: {
//     margin: theme.spacing.unit * 2
//   }
// });

// class SimplePopover extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       usernoteid: "",
//       opensnackbar:false,
//       reminders:''

//     };
//   }

//   state = {
//     anchorEl: null
//   };

//   handleReminder1=(reminder1)=>{
//     this.setState({reminders:reminder1})
    
//  }
//   handleClick = event => {
//     let noteid = this.props.propsRemindernote;
//     this.setState({ usernoteid: noteid });
//     console.log("noteid" + noteid);

//     this.setState({
//       anchorEl: event.currentTarget
//     });
//   };

//   handleClose1 = () => {
//     this.setState({
//       opensnackbar:false    });
//   };

//   handleClose = () => {
//     this.setState({
//       anchorEl: null
//     });
//     console.log("add reminder"+ this.state.reminders);
//     this.props.onSelectReminder(this.state.reminders);


//   };

//   render() {
//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);
    

//     return (
//       <div  >
//         <Tooltip title="Remind me">
//           <AddAlertOutlinedIcon onClick={this.handleClick} />
//         </Tooltip>

//         <Popover
        
//           id="simple-popper"
//           open={open}
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center"
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "center"
//           }}
//         >
//           <div className="main">
//             <div
//               onClick={this.handleClose}
//               className="today"
//               style={{ fontSize: "20px" }}
//             >
//               Reminder :
//             </div>
//             <div className="today" onClick={this.handleClose}>
//               <div> Later today</div>
//               <div>Mon,8:00 PM</div>
//             </div>

//             <div className="today"   onClick={this.handleClose}>
//               <div>Tomorrow</div>
//               <div>Thu,8:00 PM</div>
//             </div>

//             <div className="today"   onClick={this.handleClose}>
//               <div>Next week</div>
//               <div>Fri,8:00 PM</div>
//             </div>
//           </div>
//           <Datetimepicker
//               onClick={this.handleClose}
//             propsnoteid={this.state.usernoteid}
//             refresh1={this.props.refresh}
//             onSelectReminder1={this.handleReminder1}
//           />
//         </Popover>
//       </div>
//     );
//   }
// }

// SimplePopover.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(SimplePopover);


