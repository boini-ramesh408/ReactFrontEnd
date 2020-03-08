
import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";
import "../cssFile/Displaynotes.css";
import { Dialog } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import CreateNote from '../create/CreateNote';
import ArchiveIcon from '@material-ui/icons/Archive';
import Reminder from '../cardComponents/Reminder'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import CollaborateNotes from '../create/CollaborateNotes';
import Color from "../cardComponents/Color";
import NoteMore from '../dashboard/NoteMore';


export class Displaynotes extends Component {
  queue = [];
  constructor(props) {
    super(props);
    let token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      open: false,
      dialogOpen: false,
      more: false,
      allNotes: [],
      notearr: null,
      title: "",
      note: "",
      noteid:"",
      token:"",
      pinUnpinArray: [],
      loggedIn,
      opensnackbar: false,
      messageInfo: {},
      Snackbarmsg:'',
      labelarray: []
    };
  }
  NoteCreateClose =() =>{this.setState({closenotes:null})}


  handleOpenNoteChange = () => {this.setState({ view: true });};
  
handleReminder = reminder => {this.setState({ reminder: reminder });};


handlesetLabel = labels => 
  {
    console.log("display" + labels);

    this.setState({labelarray: labels});
  };

processQueue = () => 
{
  if (this.queue.length > 0) {
    this.setState
    ({
        messageInfo: this.queue.shift(),opensnackbar: true
    });
  }
};

handleExited = () => {this.processQueue();};

 
HandleColor=color=>{

    this.setState({color:color});
  }

handleUpdatetitle = event => {this.setState({title: event.target.value});

    console.log("ddd" + this.state.title);
  };

HandleCollaborator =collaborators =>{this.setState({ collaborators: collaborators });}


handleUpdatedescription = event => {this.setState({note: event.target.value});
    console.log(this.state.note);
  };

handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ opensnackbar: false });
  };
handleClose = () => 
  {
    console.log("close ");
    this.setState({
      dialogOpen: false
    });

    let updatenote = {};
    console.log(this.state.title);
    console.log(this.state.note);
    updatenote.title = this.state.title;
    updatenote.note = this.state.note;
    // updatenote.noteid = this.state.notearr.id;
    let token = localStorage.getItem("token");
    let id = this.state.notearr.id;
    // let headers={
    //   token
    // }
    console.log(token)
    console.log(id)
    console.log(updatenote)

    axios.put("http://127.0.0.1:8000/api/note/"+id,updatenote)
      .then(Response => {
        let message = "Note update successfully ";
        console.log("update note");
        this.getAllNotes();
        this.queue.push({message,key: new Date().getTime()});
        this.setState({ opensnackbar: true ,Snackbarmsg:message});
      })
      .catch(err => {console.log("not update note");});
  };

getAllNotes = () => 
  {
    let token = localStorage.getItem("token");

    axios.get("http://127.0.0.1:8000/api/note/")
      .then(Response => {
        let array = [];
        // let array1 = [];
        console.log(Response)
        Response.data.data.forEach(element => {
            array.push(element);
            console.log(array)
          }
        );

        this.setState({allNotes: array});


        // this.setState({
        //   pinUnpinArray: array1
        // });
      })
      .catch(err => {console.log("errorr");});
  };
handleDialogOpen = key => 
  {
    console.log(key);
    this.setState({dialogOpen: !this.state.dialogOpen,notearr: key
    });
  };

handlesetColor = color => {};

  UNSAFE_componentWillMount() {
    this.getAllNotes(); 
  }
  // componentDidMount=()=>{
  //         this.getAllNotes();
  // }

  render() {
   

    return (
      <div >
         <div>
          <CreateNote refresh={this.getAllNotes} />
        </div>
        <div
          style={{display: "flex",width: "1000px",flexWrap: "wrap",
          flexDirection: "row",paddingLeft: "20%"}}>
            
           {this.state.allNotes.map(key=> (
            <div className="trashnoted" style={{ padding: 5 }}>

              <Card
                style={{backgroundColor: key.color,
                boxShadow: "0 0 0 1px rgba(0, 0, 0, .125)",borderRadius: "18px",overflow: 'hidden',}}>
                <div
                  style={{display: "flex",justifyContent: "space-between",padding: "2%"}} >
                  <div>

                    <TextField
                      onClick={() => this.handleDialogOpen(key)}
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      value={key.title}
                      multiline
                      fullWidth
                      margin="normal"
                      InputProps={{disableUnderline: true}}/>
                  </div>
                 
                </div>
                <div
                  style={{justifyContent: "spacearound",display: "flex",padding: "2%" }}
                  onClick={() => this.handleDialogOpen(key)}>
                  {" "}
                  <TextField
                  
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    value={key.note}
                    multiline
                    fullWidth
                    margin="normal"
                    InputProps={{disableUnderline: true}}/>
                </div>
              
                <div>
                <TextField
                 
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  value={key.reminder}
                  multiline
                  fullWidth
                  margin="normal"
                  InputProps={{disableUnderline: true}}/>
              </div>

              <div>
                <TextField
                
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  value={key.collaborator}
                  multiline
                  fullWidth
                  margin="normal"
                  InputProps={{disableUnderline: true}}/>

              </div>
 
              </Card>
            </div>
          ))}
        </div>
       
        <div
          style={{display: "flex", width: "800px",flexWrap: "wrap",
            flexDirection: "row",paddingLeft: "8%",paddingTop: "6%"}}>
          {/* //edit notes */}
          <Dialog open={this.state.dialogOpen}
            onClose={this.handleClose}
            aria-labelledby="simple-dialog-title"
            style={{ width: "100%", }}>

            {this.state.notearr !== null ? (
              <div className="trashnoted" style={{ padding: 5 }}>

                <Card style={{width: "484px",boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                    backgroundColor: this.state.notearr.color}}>

                  <div style={{display: "flex",justifyContent: "space-between"}}>
                    <div>
                      <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        defaultValue={this.state.notearr.title}
                        multiline
                        fullWidth
                        margin="normal"
                        InputProps={{disableUnderline: true}}
                        onChange={this.handleUpdatetitle}
                      />
                    </div>

                  </div>
                  <div
                    style={{
                      justifyContent: "spacearound",
                      display: "flex"
                    }}
                  >
                    <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      defaultValue={this.state.notearr.note}
                      multiline
                      fullWidth
                      margin="normal"
                      InputProps={{disableUnderline: true}}
                      onChange={this.handleUpdatedescription}
                    />
                  </div>
                 <div
                  style={{
                    justifyContent: "spacebetween",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap:'wrap',
                    paddingLeft:'3%'
                  }}
                >
                  {this.state.notearr.reminder != null ? (
                    
                      <Chip
                        style={{ backgroundColor: "#rgba(206, 206, 206, 0)" }}
                        label={this.state.notearr.reminder}

                        onDelete={() => this.handleDelete(this.state.notearr.id)}
                        variant="outlined"
                      />
                
                  ) : null}
                  
                </div>

                  <div className="closen">
                    <div>
                      {/* // style={{justifyContent: "space-between",display: "flex", */}
                      {/* //   paddingTop: "13px",paddingBottom: "13px"}}> */}
                                          
                      <Button onClick={this.handleClose}>close</Button>
                    </div>
                  </div>

                  <div className="reminderIconn">
                  <IconButton>
                  {/* <AddAlertOutlinedIcon onChange={this.handleRemind}/> */}
                    <Reminder onSelectReminder={this.handleReminder}/>
                  </IconButton>
                </div>
                <div  className="imageIconn">
                  <IconButton>
                    <InsertPhotoIcon/>
                  </IconButton>
                </div>
                
                <div className="colorn" >
                  <IconButton>
                  <Color onSelectColor={this.HandleColor}/>
                  </IconButton>
                </div>

                <div className="archieven">
                  <IconButton>
                  <ArchiveIcon /> 
                  </IconButton>
                
                </div>

                <div className="addpersionn">
                  <IconButton>
                  <CollaborateNotes onSelectCollabrator={this.HandleCollaborator}/>
                  </IconButton>
                
                </div>
                <div className="moren">
                <NoteMore id={this.state.notearr.id}/>
                </div>
                
                </Card>
              </div>
            ) : null}
          </Dialog>
        </div>
      </div>

    );
  }
}

export default Displaynotes;