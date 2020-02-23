import React from 'react';

export default class List extends React.Component{
    
   
    render(){
        return(
            <div>{this.props.resturant.charAt(0).toUpperCase() + this.props.resturant.slice(1)}
          
            </div>

             )
    }
}