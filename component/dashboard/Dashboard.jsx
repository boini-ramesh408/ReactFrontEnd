import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import keeplogo from "../image/keeplogo.png";
import SearchIcon from "@material-ui/icons/Search";
import Profile from "./Profile";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NotesDrawer from '../create/NotesDrawer';
import '../cssFile/Dashboard.css';
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { IconButton } from "@material-ui/core";
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import RefreshIcon from '@material-ui/icons/Refresh';




const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: "13%"
      }
    },
    PersistentDrawerLeft: {
      drawer: {
        width: "0px"
      }
    }
  }
});
 
class Dashboard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title:"",
        anchorEl: null,
        userprofle: false,
        allNote: [],
        list: false,
        open:null,
        search:"",
        view:false
      };
} 
  NoteCreateClose =() =>{this.setState({closenotes:true})}


handleOpenNoteChange = () => {this.setState({ view: true });};



  getAllSearchNotes=(event)=>
  {
    this.setState({title:event.target.value})

    var Data={ title:this.state.title }

    console.log('====================================');
    console.log(this.state.title);
    console.log('====================================');

    this.props.history.push("/dash/search",Data);
    
  };

  setStateAsync(state){

    return new Promise(resolve=>{this.setState({state,resolve});})

  }

  searchAlldata=(e)=>{this.setState({search:e.target.value})

    console.log(this.state.search,"searchhh")
  }

  HandleTitle=(e) =>{this.setState({title:e.target.value})

    console.log(this.state.title,"title");
  }

  listviewhandle = () => {this.setState({ list: true });};


  gridviewhandle = () => {this.setState({ list: false });};


  handleshowprofile = () => {this.setState({ userprofle: true });};


  handlehideprofile = () => {this.setState({ userprofle: false });};


  handleRefresh=()=>{this.ref.getAllNotes();}


  getReminders=event=>{this.props.history.push("/dash/displayremind/")}


  getArchieveNotes=event=>{this.props.history.push("/dash/archieve")}


  getTrashNotes=event=>{this.props.history.push("/dash/trash")}

  
  // getLabels=event=>{this.props.history.push("/dash/label")}
  getLabels = label => {
    console.log(label.id);
    
    //  this.props.label_id(label.id)
     
    console.log(label);
console.log(this.props);

    this.props.history.push({
      pathname: "/dash/label/"+ label.name,
      state: { label: label }
    })
  };
    
  HandleHome=event=>{this.props.history.push("/dash/notes");}


  getNotess =event=>{this.props.history.push("/dash/notes");}  


  render() 
  {
    console.log("notes",this.state.allNote)
    return (
      // <div>
      // <ClickAwayListener>
      <div className="mainDashboard">
        <MuiThemeProvider theme={theme}>
            <Toolbar className="toolbar" style={{ backgroundColor: "white" }}>
              <div className="keepAndLogo">
                <div>
                {/* showNoteclick={this.getNotess} */}

                <NotesDrawer  showReminderclick={this.getReminders}
                              
                              showNoteclick={this.getNotess}

                              showArchieveclick={this.getArchieveNotes}

                              showTrashclick={this.getTrashNotes}

                              showLabelClick={this.getLabels}/>
                </div>

                <img src={keeplogo} width="50px" height="50px" alt="hello" ></img>

                <Typography className="keep" variant="h6" onClick={this.HandleHome}

                 color="inherit" noWrap>

                <b style={{ marginLeft: "2%" }}>Fundoo</b>

                </Typography>
              </div>
              
              <div className="dashboardSearch">

                <div className="dashboardsearchicon">

                  <IconButton>

                      <SearchIcon onClick={this.getAllSearchNotes}/>

                  </IconButton>
                  
                </div>

                <div style={{ width: "90%" }}>

                  <TextField color="white" placeholder="Search…" 
                  
                    id="standard-full-width"                
                    // onChange={this.getAllSearchNotes}
                    onChange={this.HandleTitle} 
                    multiline
                    fullWidth
                    margin="normal"
                    InputProps={{disableUnderline: true}}/>
                </div>
              </div>

              <div>
                <RefreshIcon/>
              </div>
              <div>
              {!this.state.view ? (
                  <div  onClick={
                    this.state.view
                      ? this.handleCloseChange
                      : this.handleOpenNoteChange
                  }>
                      <ViewStreamIcon />
                    </div>
              ):(
                <div >
                <ViewModuleIcon/>
            </div>
              )}
              </div>
             
              <div>
                <Profile  className="pic"/>
              </div>
            </Toolbar>
        </MuiThemeProvider>
        {/* <div> 
          <CreateNote refresh={this.handleRefresh}/> 
         <Displaynotes ref='child'/>   {/* <EditNotes ref='child'/> */}
         {/* </div>   */}
     
      </div>
     
    
    );
  }
}

export default Dashboard;

