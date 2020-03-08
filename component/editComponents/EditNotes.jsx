import React, { Component } from "react";
import { Card, Tooltip, Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
export class EditNotes extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
         
      notedetail:this. props.noteprops1
       
    }
  }
 
  render() {

      
    return (
      <div>
     {this.state.notearr !== null ? (
            <div className="trashnoted" style={{ padding: 5 }}>
              <Card
                style={{
                  width: "484px",
                  boxShadow: "2px 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px"
                  }}
                >
                  <div>
                    <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      value={this.notearr.title}
                      multiline
                      fullWidth
                      margin="normal"
                      InputProps={{
                        disableUnderline: true
                      }}
                      onChange={this.HandleUpdateTitleChange}
                    />
                  </div>
                  <div className="footerarea">
                    <Tooltip title="pin note ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="#000"
                          d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "spacearound",
                    display: "flex",
                    padding: "12px"
                  }}
                >
                  {" "}
                  <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    value={this.notearr.description}
                    multiline
                    fullWidth
                    margin="normal"
                    InputProps={{
                      disableUnderline: true
                    }}
                    onChange={this.HandleUpdateDescriptionChange}
                  />
                </div>

                <div className="footerarea">
                  <div
                    style={{
                      justifyContent: "space-around",
                      display: "flex",
                      padding: "12px",
                      paddingBottom: "13px"
                    }}
                  >
                   

                    <Button onClick={this.handleClose}>close</Button>
                  </div>
                </div>
              </Card>
            </div>
          ) : null}
        
      </div>
    )
  }
}

export default EditNotes