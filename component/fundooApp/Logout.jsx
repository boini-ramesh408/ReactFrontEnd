
import React,{Component} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
class Logout extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            
            alert_response:null
        }
    }
    LogoutHandler=(e)=>
    {
        e.preventDefault()
        
        axios.get("http://127.0.0.1:8000/api/logout/")
        .then(response=>{console.log(response.data.logout)

            // this.props.history.push("/");

            
        })
}
render(){
    return(
        <Button href="/">Logout</Button>
    )
}
}
export default Logout