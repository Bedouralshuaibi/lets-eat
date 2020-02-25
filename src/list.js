import React from 'react';
export default class List extends React.Component{
    
   
    render(){
        console.log('qqq', this.props)
        console.log('qqq', this.props.resturant)
        console.log('qqq', this.props.resturant.name)
        const isEmpty = this.props.resturant.name === undefined ? true : false;
        console.log('isEmpty', isEmpty)
        return(
            <div>
            <h1>{this.props.resturant.name.charAt(0).toUpperCase() + this.props.resturant.name.slice(1)}</h1>
            <p>{this.props.resturant.cusine}</p>
                {/* <GoogleMap map ={this.props.map}/> */}
            </div>

             )
    }
}