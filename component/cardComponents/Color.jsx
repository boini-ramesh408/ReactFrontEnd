import React from "react";
import Menu from "@material-ui/core/Menu";
import {
  Tooltip,

  IconButton
} from "@material-ui/core";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import { set_Color } from "../../Redux/action";
import { connect } from "react-redux";

const colorsPallete = [
  {
    colorName: "White",
    colorCode: "#ffffff"
  },
  {
    colorName: "Red",
    colorCode: "#ea2e2e"
  },
  {
    colorName: "Orange",
    colorCode: "#ffb600"
  },
  {
    colorName: "Yellow",
    colorCode: "#e1e82e"
  },
  {
    colorName: "Green",
    colorCode: "#ccff90"
  },
  {
    colorName: "Teal",
    colorCode: "#a7ffeb"
  },
  {
    colorName: "Blue",
    colorCode: "#281bd6"
  },
  {
    colorName: "Dark blue",
    colorCode: "#aecbfa"
  },

  {
    colorName: "Purple",
    colorCode: "#d7adfb"
  },
  {
    colorName: "Pink",
    colorCode: "#fdcfe8"
  },
  {
    colorName: "Dark Brown",
    colorCode: "#e6c9a7"
  },
  {
    colorName: "Gray",
    colorCode: "#e8eaed"
  }
];

class Color extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color:''
    }
  }
  
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleColorChange = usercolor => {
    let color=usercolor.colorCode;
    console.log(color,"aaaa")
    this.props.onSelectColor(color) //working
  }


  render() {
    const { anchorEl } = this.state;

    

    return (
      <div  className= {this.props.view ?(null):("footerpadding")}>

       
        <Tooltip title="Change color">
          <PaletteOutlinedIcon onMouseOver={this.handleClick} />
        </Tooltip>

         <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          style={{borderRadius:'10%'}}
        >
          {" "}
          <div
            style={{
              position: "relative",
              width: "120px",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row"
            }}
          >
            {colorsPallete.map(usercolor => (
              <div style={{ padding: "3px" }}>
                <IconButton
                  onClick={() => {
                    this.handleColorChange(usercolor)
                 
                  }}
                  
                  style={{ backgroundColor: usercolor.colorName }}
                ></IconButton>
              </div>
            ))}
          </div>
        </Menu> 
      </div>
    );
  }
}





export default Color;