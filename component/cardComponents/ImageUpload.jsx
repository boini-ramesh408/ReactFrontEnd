// import React, { Component } from 'react'
// import Axios from 'axios'
// import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
// export class ImageUpload extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              image:"",
//         }
//     }

//     HandleFile(e)
//     {
//         let files=e.target.files
//         let reader=new FileReader()
//         reader.readAsDataURL(files[0])
//         reader.onload=(e)=>{
        
//             // const url="http://127.0.0.1:8000/api/profile/"

//             const formdata={file:e.target.result}
//             console.log(formdata,"dat")
//             localStorage.setItem("image1",formdata)
//             Axios.post("http://127.0.0.1:8000/api/profile/",formdata)
//             // return post(url,formdata)
//         }
        
//         console.log(files,"image file")
//     }
//     render() {
//         return (
//             <div onSubmit={this.onFormSubmit}>
//                 <InsertPhotoIcon  input type="file"  onChange={this.HandleFile}/>
//                 <input type="file" />
//             </div>
//         )
//     }
// }

// export default ImageUpload

import React from 'react';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import axios from 'axios'
export default class ImageUpload extends React.Component {

    state = {
        open: false,
        messageInfo: {},
    };

    handleImageClick = () => {
        this.fileInput.click();
    }

    handleNotePic = (e) => {

        let files=e.target.files
        let reader=new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload=(e)=>{
        
            // const url="http://127.0.0.1:8000/api/profile/"

            const formdata={file:e.target.result}
            console.log(formdata,"dat")
            localStorage.setItem("image1",formdata)
            this.props.onSelectImage(formdata);
            // axios.post("http://127.0.0.1:8000/api/profile/",formdata)
            // return post(url,formdata)
        }
        
        console.log(files,"image file")
    
    }
    render() {
        return (
            <div>
                <div className='note-icon-div' role='Button' onClick={this.handleImageClick} >
                   <InsertPhotoIcon/>
                </div>
                <input

                    style={{ display: 'none' }}
                    accept='image/*'
                    ref={fileInput => this.fileInput = fileInput}
                    type='file'
                    name='profiepic'
                    placeholder='Change Profile Pic'
                    onChange={this.handleNotePic}
                />
            </div>
        );
    }
}
