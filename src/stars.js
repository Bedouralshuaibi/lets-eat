import React from 'react';


export default class Stars extends React.Component{
    togelStar = ()=>{
        console.log('change to full star')
        this.props.togelStar(this.props.id)
    }
    
    render(){
        return(
            <div>
                <div onClick={this.togelStar}>{this.props.star}</div>
            </div>
        )
    }
}
