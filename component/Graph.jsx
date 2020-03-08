import React from "react";
import { BarChart } from "react-d3-components";
import axios from "axios";
class Graph extends React.Component {
  a = "";
  constructor(props) {
    super(props);
    this.state = {
      allId: [],
      allNote: [],
      allTrash: [],
      updated: false,
      data: [
        {
          label: "users",
          values: [
            { x: "users", y: 0},
            { x: "notecount", y: 0 },
            { x: "TrashCount", y: 0 }
          ]
        }
      ]
    };
    this.getMails = this.getMails.bind(this);
   
    
  }
  // data = [
  //   {
  //     label: "users",
  //     values: [
  //       { x: "users", y: 10}, // ()=> { console.log('test-', that.state.allId.length );return that.state.allId.length; } }, // this.state.allId },
  //       { x: "notecount", y: 20 },
  //       { x: "TrashCount", y: 50 }
  //     ]
  //   }
  // ];
  getMails = () => {
   
    let array = [];
    axios.get("http://127.0.0.1:8000/api/note/").then(Response => {
     
      console.log(Response.data.data.length);
      
      this.setState({allId: Response.data.data.length});
       this.setState({ data: [{
        'label': "users",
        'values': [
          { x: "users", y:this.state.allId }, 
          { x: "notecount", y: 20 },
          { x: "TrashCount", y: 50 }
        ]
      }], updated: !this.state.updated});

      //this.setState({allId: Response.data.data.length});
      // Response.data.data.forEach(element => {
      //   array.push(element);
        
      //   array.map( k => {
      //     // console.log(k.id)
      //     let idcount = k.id;
      //     // var  idcount1=(idcount+1).length

      //     this.setState({ allId: idcount });
      //     console.log('test---', this.state.allId)
      //     //       let notecnt=k.note
      //     //       notecnt=notecnt+1
      //     //       var result = notecnt.length;
      //     //       // console.log(result,"cnt")
      //     //   this.setState({allNote:result})
      //     //       let trashcnt=k.note
      //     //       trashcnt=trashcnt+1
      //     //       var result1 = trashcnt.length;
      //     //   this.setState({allTrash:result1})
      //   });
      // });
      //   this.setState({allMails: array});
    });
  };

  componentDidMount() {
    this.getMails();
  }

  render() {
   
    return (
      <BarChart
        data={this.state.data}
        width={400}
        height={400}
        margin={{ top: 100, bottom: 50, left: 50, right: 10 }}
      />
    );
  }
}
export default Graph;
