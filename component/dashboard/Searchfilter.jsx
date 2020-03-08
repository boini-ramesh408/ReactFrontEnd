import React, { Component } from "react";
import "../cssFile/Displaynotes.css";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";
import axios from 'axios'
import {searchNote} from '../service/Services'

export default class Searchfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      allNotess: [],
    };
  }

  getSearchNote=(event)=>{
     let data={title:this.props.location.state.title}
      console.log("data",data)

  
      searchNote(data)


      .then(Response => {
        console.log(Response,"gh")
        // this.setState({ allNote: Response.data.data });
        let array = [];
        Response.data.data.forEach(element => {
         console.log('==>',element);
            array.push(element);
            console.log(array)

        });
        this.setState({
          allNotess: array
        })
        // },()=>{console.log(this.state.allNote)});
      })
      
      .catch(err => {
        console.log("errorr");
      });
  }
componentDidMount(){
  this.getSearchNote();
}

  render() {
    //  console.log('datas',this.props.searchNotedata)
    //  console.log(this.props.searchNotedata,'search data')
       {/* {this.props.searchNotedata} */}
       console.log("props123",this.props.location.state.title)
    return (

      <div>
        {
           (this.state.allNotess).map((key) => (
            <Card >
              <div>
                <TextField value={key.title}> 
                
                </TextField>
              </div>

              <div>

                <TextField value={key.note}> 
                </TextField>

              </div>

            </Card>
          ))
        }



      </div>
      
      

    );
  }
}


