import React from 'react';
export default class List extends React.Component{
    
   
    render(){
        return(
            <div><h1>{this.props.resturant.name.charAt(0).toUpperCase() + this.props.resturant.name.slice(1)}</h1>
                <p>{this.props.resturant.cusine}</p>
                {/* <GoogleMap map ={this.props.map}/> */}
            </div>

             )
    }
}