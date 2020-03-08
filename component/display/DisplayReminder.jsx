import React, { Component } from 'react'
import axios from 'axios'
import {Card} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
class DisplayReminder extends Component 
{
    
    constructor(props) {
        super(props)
    
        this.state = {
             allNotes:[],
             title:"",
             note:"",
             reminder:""
        }
    }
    
    getReminderNotes=()=>{
        let array=[]
        axios.get("http://127.0.0.1:8000/api/remainder/")
        .then(response=>{
            // array.push(response);
            // console.log(array)
            console.log(response.data)
            response.data.data.forEach(element => {
          
                array.push(element);
                console.log(array,"fghgfh")
              }
            );
                this.setState({
                    allNotes:array
                })
        })
        .catch(error=>{
            console.log(error)
        })
    }


    componentDidMount=()=>{
        this.getReminderNotes();
    }

    
    render() {
        return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            <div className="createnotedisplay">
            
            {this.state.allNotes.map(key=>{
                    console.log(key.title)
            return(
                <Card className="cards" 
                style={{
                backgroundColor: key.color,borderRadius: "10px",overflow: 'hidden',}}> 
                    <div>
                        <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        color="white"
                        placeholder="Title"
                        name="title"
                        multiline
                        value={key.title}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            disableUnderline: true
                        }}

                        />
                    </div>
                  <div>
                      <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      color="white"
                      multiline
                      fullWidth
                      name="note"
                      value={key.note}
                      margin="normal"
                      InputProps={{
                          disableUnderline: true
                      }}
                      placeholder="Note..."
                      />
                  </div>
                  <div>
                      <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      color="white"
                      multiline
                      fullWidth
                      name="note"
                      value={key.reminder}
                      margin="normal"
                      InputProps={{
                          disableUnderline: true
                      }}
                      placeholder="Note..."
                      />
                  </div>
                  </Card>
                )
            }
            )
        }
        </div>
        )
    }
}

export default DisplayReminder
