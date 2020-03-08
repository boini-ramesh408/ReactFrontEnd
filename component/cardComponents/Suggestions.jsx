import React, { Component } from 'react'
import axios from 'axios'
export class Suggestions extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
       Suggestion:[],
       allMails:[]
    }
  }
  
onTextChanged=(e)=>{

  const value=e.target.value
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

}


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
    console.log(this.state.allMails,"m")
    return (
      <div>
      <input onChange={this.onTextChanged} type="text" />
      {this.renderSuggestions()}
           </div>
    )
  }
}

export default Suggestions


