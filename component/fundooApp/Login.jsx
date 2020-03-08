import React,{Component} from 'react'
import '../cssFile/Fundoo.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {login} from '../service/Services'
class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:"",
            password:"",
           
            alert_response:null
        }
    }
    ForgotHandler=e=>{
      this.props.history.push("/forgot")
    }

    RegisterHandler=e=>{
      this.props.history.push("/register")
    }
    handlechangeusername = event => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
      };
      handlechangepassword = event => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
      };
    submitHandler=(e)=>
    {
        e.preventDefault()
        console.log(this.state)
        localStorage.setItem("username",this.state.username)
       let token=localStorage.getItem('token')
      let data={
        username:this.state.username,
        password:this.state.password
      }
      login(data,token)
        // axios.post("http://127.0.0.1:8000/api/login/",data,)
        .then(response=>{
            console.log(response)
      
        // localStorage.setItem("token",response.data.headers)
            this.props.history.push("/dash/notes");
            
        }) 
        .catch(error=>{console.log(error)});
        //  alert(error.data.message);   
    }
    render()
    {
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
          Sign in
        </Typography>
        <form className="form" noValidate >   
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
            onChange={this.handlechangeusername}  
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
            onChange={this.handlechangepassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"/>
          <Button className="button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={this.submitHandler} >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={this.ForgotHandler}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={this.RegisterHandler}>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
         
        </form>
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
export default Login