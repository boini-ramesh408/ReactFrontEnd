import React,{Component} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../cssFile/Fundoo.css'
import Typography from '@material-ui/core/Typography';

class Registration extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:"",
            password:"",
            confirm_password:"",
            email:"",
            alert_response:null
        }
    }
   
    changeHandler=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>
    {
        e.preventDefault()
        
        // console.log(this.state)
        axios.post("http://127.0.0.1:8000/api/register/",this.state)
        .then(response=>
            {console.log();
                
                alert(response.data.message);
                console.log(response)
                localStorage.setItem("email",this.state.email)
                localStorage.setItem("token",response.data.data)
        }).catch(err=>{
            console.log("error");
        })
        // .then((response)=>{
        //     const response=response.data.status;
        //     this.setState({response})
        // })
        // .then(res=>{this.setState({alert_response:"login successfully"})})
        // .catch(error=>{console.log(error)});
    }
    render()
    {
        const {username,password,confirm_password,email}=this.state

        return(
        <div className="moveCentre">

        <div className="fundooLogin">
        <span style={{ color: "blue" }}>f</span>
        <span style={{ color: "red" }}>u</span>
        <span style={{ color: "orange" }}>n</span>
        <span style={{ color: "blue" }}>d</span>
        <span style={{ color: "green" }}>o</span>
        <span style={{ color: "red" }}>o</span>
      </div>
      <Typography component="h1" variant="h5">
         Registration
        </Typography>
                <form onSubmit={this.submitHandler}>
                   
                   
                    <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="enter username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={this.changeHandler}  
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.changeHandler}
                  />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirm_password"
                  label="confirm_password"
                  type="password"
                  id="confirm_password"
                  autoComplete="current-password"
                  onChange={this.changeHandler}
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="current-password"
                onChange={this.changeHandler}
              />
                 
                  <Button className="button"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.submitHandler} >
                   Register
                  </Button>
                </form>
                {/* {this.state.response ? <p>{this.state.response}</p>: */}
                 {/* <p>please Enter valid credentials</p>} */}
            </div>
        )
    } // onClick={this.submitHandler}
}
// if (this.state.response){
//     <p>{this.state.response}</p>
// }
// else{
//     <p>please Enter valid credentials</p>
// }
export default Registration