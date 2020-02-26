import React from 'react';
import axios from 'axios';

export default class Giphy extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         img: ''
    //     }
    // }
    giveMeMood=()=>{
    axios({
    method: 'GET',
    url: 'https://api.giphy.com/v1/stickers/random?api_key=INYnrH1INJdy8yQ5SgKXEMMdIR7mNQFl&tag=eat&rating=G',
  })
    .then(res => {
      // handle success
      console.log(res.data.data.images.preview_gif.url);
        
      const giphy= res.data.data.images.preview_gif.url
    //    this.setState({img:giphy})
       this.props.imgto(giphy)
    //   this.prpos.mood(url)
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
}
render(){
    return(<dive>
     <label></label>
     <button onClick={this.giveMeMood} type="button" class="btn btn-warning">Find Your Food Mood</button>

     {/* <button onClick={this.giveMeMood}>Find Your Food Mood</button> */}
      
    </dive>

    )
}
}