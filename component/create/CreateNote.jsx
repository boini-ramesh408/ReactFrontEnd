import React, { Component } from "react";
import { Paper, InputBase, Card, Button, TextField, IconButton } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "../cssFile/CreateNote.css";
import Chip from "@material-ui/core/Chip";
import axios from 'axios';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import PaletteIcon from '@material-ui/icons/Palette';
import ArchiveIcon from '@material-ui/icons/Archive';
import Reminder from '../cardComponents/Reminder'
import MoreOption from '../dashboard/ShowMore';
import CollaborateNotes from '../create/CollaborateNotes';
import Color from "../cardComponents/Color";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ImageUpload from "../cardComponents/ImageUpload";
import {createnote} from '../service/Services';

export class CreateNote extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      open: false,
      title: "",
      note: "",
      token:"",
      reminder:"",
      color:"",
      image:"",
      collaborators:[],
 
    };
  }
  
  
NoteCreateClose =() =>{this.setState({closenotes:null})}


handleOpenNoteChange = () => {this.setState({ open: true });};


handleCloseChange = () => {this.setState({ open: false });};


handlechangetitle = event => {this.setState({title: event.target.value});
    console.log(this.state.title);};


handlechangedescription = event => {this.setState({note: event.target.value});
    console.log(this.state.note);};


HandleColor=color=>{this.setState({color:color});}


handleDeleteChange = () => {this.setState({ reminder: null });};


HandleImage=(image)=>{this.setState({image:image})}


handleReminder = reminder => {this.setState({ reminder: reminder });};
  

HandleCollaborator =collaborators =>{this.setState({ collaborators: collaborators });}


handleOnClickAwayChange = () => {this.setState({ open: false });

    let noted={};

    console.log("close");

    if (noted !== null) 
    {
      
      noted.title = this.state.title;
      noted.note = this.state.note;
      noted.collaborators=this.state.collaborators;
      noted.reminder=this.state.reminder;
      noted.color=this.state.color;
      noted.image=this.state.image;
      console.log('reming',noted)
      let token=localStorage.getItem('token')
      console.log(token,"tok")
    
      createnote(noted,token)
      // axios({
      //   method:'post',
      //   url:'http://127.0.0.1:8000/api/note/',
      //   data:noted,
      //   config
      // })

      .then(response => 
          {
          console.log(response,"note  created..");
          this.props.refresh();})
        .catch(err => {
          console.log("note not created..");});
         
    }
  };

  
  render() 
  {
    return ( 

      <ClickAwayListener>
        <div className="createnote" onClick={this.NoteCreateClose}>
          <Paper className="paper">
            {!this.state.open ? (

              <Card>
                <div>
                  <InputBase
                    color="white"
                    placeholder="Take a note..."
                    onClick={
                      this.state.open
                        ? this.handleCloseChange
                        : this.handleOpenNoteChange
                    }
                  />
                </div>
                <div className="inserImg1">
                  
                      <IconButton>
                          <ImageUpload  onSelectImage={this.HandleImage}/>
                      </IconButton>
                 
                </div>

                <div className="checkbox"> 
                <IconButton>
                  <CheckBoxOutlinedIcon />
                  </IconButton>
                </div>

              </Card>
            ) : (
              
              <Card  style={{backgroundColor: this.state.color,
                boxShadow: "0 0 0 1px rgba(0, 0, 0, .125)",borderRadius: "18px",overflow: 'hidden',}} >
                <div>
                  <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    color="white"
                    placeholder="Title"
                    name="title"
                    multiline
                    fullWidth
                    margin="normal"
                    InputProps={{disableUnderline: true}}
                    onChange={this.handlechangetitle}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    color="white"
                    multiline
                    fullWidth
                    margin="normal"
                    InputProps={{disableUnderline: true}}
                    placeholder="Take a Note..."
                    name="note"
                    onChange={this.handlechangedescription}
                  />
                </div>
                <div>
                {this.state.reminder!== null ? (
                  <div style={{paddingLeft:'10%',paddingBottom:'3%'}}>
                    <Chip
                      label={this.state.reminder}
                      onDelete={this.handleDeleteChange}
                      variant="outlined"/>
                  </div>

                ) : null}
                </div>
               
               
                
                <div style={{
                 
                marginRight:"90%",marginTop:"3%"
                }}>
                 
                
                    <Reminder onSelectReminder={this.handleReminder}/>
               
                </div>


                <div  style={{
                 
                  marginRight:"60%",marginTop:"-5.5%"
                  }}>
                  
                  <CollaborateNotes onSelectCollabrator={this.HandleCollaborator}/>
                  
                
                </div>

                <div  style={{
                 
                  marginRight:"40%",marginTop:"-4.5%"
                  }} >
                 
                  <ImageUpload  onSelectImage={this.HandleImage}/>
                  
                </div>

                <div  style={{
                 
                  marginRight:"20%",marginTop:"-6%"
                  }} >
                
                  <Color onSelectColor={this.HandleColor}/>
               
                </div>

                <div  style={{
                 
                  marginRight:"-10%",marginTop:"-6%"
                  }}>
                  
                  <ArchiveIcon /> 
                
                
                </div>


              <div  style={{
                 
                marginRight:"-30%",marginTop:"-7.5%"
                }}>
              <MoreOption />
            </div>
                <div  style={{
                   
                  marginRight:"-65%",marginTop:"-7%"
                  }}>
                <Button onClick={this.handleOnClickAwayChange}>
                  <b>close</b>
                </Button>
              </div>
                  <div></div>
              </Card>
            )}
          </Paper>   
        </div>
      </ClickAwayListener>
    );
  }
}

export default CreateNote;

