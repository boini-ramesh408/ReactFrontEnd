import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Divider, InputBase } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import {  Tooltip } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { IconButton } from "@material-ui/core";
import axios from "axios";
// import { Paper } from "material-ui";
import "../cssFile/collaborator.css";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120
  },
  
  formControlLabel: {
    marginTop: theme.spacing.unit
  }
});

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        width: "513px",
        height: "1.875em",
        paddingLeft: "8px"
      }
    },
    MuiAvatar: {
      img: {
        width: "43%",
        borderRadius: "50%",
        height: "44%"
      }
    }
  }
});

class CollaborateNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      doneopen: false,
      allNote: [],
      notearr: null,
      title: "",
      note: "",
      opensnackbar:false,
      isvalid:true,
      error:{},
      Suggestion:[],
      allMails:[],
    };
  }


  state = {
    open: false,
    fullWidth: true,
    maxWidth: "sm"
  };


  doneClickhandle = event => {
    this.setState({ doneopen: true });
    this.setState({

      email: event.target.value

      
    });
    
    const value=event.target.value
    let Suggestion=[]
    if (value.length === 0){
      this.setState(()=>({
        Suggestion:[]
      }))
    }
  
    else{
      console.log(this.state.allMails,"n")
      const regex=new RegExp(`^${value}`,'i')
      Suggestion=this.state.allMails.sort().filter(v=>regex.test(v));
      console.log(Suggestion,"sugestions")
      this.setState(()=>({Suggestion}))
    }
  
  
  







    let allNote=[]
    // allNote.push()
    // allNote=this.state.email
    allNote.push(this.state.email);
    this.setState({
      allNote:allNote
    })
    
    this.props.onSelectCollabrator(allNote)

    console.log("gff",allNote);
  };
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    
  };

  handleMaxWidthChange = event => {
    this.setState({ maxWidth: event.target.value });
  };

  handleFullWidthChange = event => {
    this.setState({ fullWidth: event.target.checked });
  };



 
  

   
  
    getMails=()=>
    {
      let array=[]
      axios.get("http://127.0.0.1:8000/api/mails/")
      .then(Response=>{
        console.log(Response,"mails list")
        Response.data.data.forEach(element => {
          array.push(element);
          // console.log(array)
        }
  
      );
      this.setState({allMails: array});
      })
      
    }
    componentDidMount(){this.getMails()}
  renderSuggestions(){
    const {Suggestion}=this.state
    if(Suggestion.length === 0){
      return null
    }
    
    return(
      <ul>
      {Suggestion.map(key=>
        <li>{key}</li>
    )}
      </ul>
    
    )
  
  }



  render() {
    let name1 = localStorage.getItem("username");
    let email = localStorage.getItem("email");
   
    return (
      
      <React.Fragment>
    
        <div className= {this.props.view ?(null):("footerpadding")} >
          <Tooltip title="Collaborator" onClick={this.handleClickOpen}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000">
              <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z" />
            </svg>
          </Tooltip>
        </div>

        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <MuiThemeProvider theme={theme}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "600px",
                flexDirection: "column"
              }}>
              <span
                style={{
                  padding: "2%",
                  fontSize: "large",
                  fontFamily: "inherit",
                  fontStyle: "unset"
                }}
              >
                <b>Collaborators</b>
              </span>
              <span style={{ padding: "2%" }}>
                {" "}
                <Divider />
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: ""
                }}
              >
                <span>
                  <Avatar alt={localStorage.getItem("username")}
                    src={localStorage.getItem("profile")}
                    style={{ width: "45px", height: "35px" }}
                  />
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column"
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      marginTop: "22px"
                    }}
                  >
                    <b>{name1}(Owner)</b>
                    <i>{email}</i>
                  </span>
                </div>
              </div>
             
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "1%"
                }}
              >
                <span style={{ marginLeft: "9px" }}>
                  <Avatar>
                    <PersonAddIcon />
                  </Avatar>
                </span>
                <span>
                  <InputBase
                    width="600px"
                    id="standard-basic"
                    placeholder="Person or email to share with"
                    
                    onChange={this.doneClickhandle}/>
                    <Paper  className="paper" marginLeft="10%">
                    {this.renderSuggestions()  }
                    </Paper>
                   
                </span>

                {this.state.doneopen !== false ? (
                  <span style={{ paddingRight: "6px" }}>
                    <DoneOutlinedIcon onClick={this.donenotClickhandle} />
                  </span>

                ) : null}

              </div>
              
              <span style={{color:"red", justifyContent:"flex-start",display:"flex",marginLeft: "61px"}}>{this.state.error.email}</span>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end ",
                  flexDirection: "row",
                  padding: " 3%"
                }}
              >

                <span
                  style={{ marginRight: "56px" }}
                  onClick={this.handleClose}
                >
                  Cancel
                </span>
                <span onClick={this.handleClose}>Save</span>
              </div>
            </div>
          </MuiThemeProvider>
        </Dialog>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.opensnackbar}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">new label Created</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose1}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose1}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
       
      </React.Fragment>
     
    );
  }
}

CollaborateNotes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CollaborateNotes);