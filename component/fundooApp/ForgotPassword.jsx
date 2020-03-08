import React,{Component} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class ForgotPassword extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:"",
            // password:"",
            // confirm_password:"",
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
        console.log(this.state)
        axios.post("http://127.0.0.1:8000/api/reset/",this.state)
        .then(response=>
            {console.log();
                // alert(response.data.message);
            
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
        const {email}=this.state

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
          Reset-password
        </Typography>
                <form onSubmit={this.submitHandler}>
                <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="enter email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.changeHandler}  
              />
                    <Button className="button"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.submitHandler} >
                    Reset
                  </Button>
                </form>
                {/* {this.state.response ? <p>{this.state.response}</p>:
                <p>please Enter valid credentials</p>
            } */}
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
export default ForgotPassword