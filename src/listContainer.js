import React from 'react';
import List from './list';
import ListTail from './list-tail';


export default class ListContainer extends React.Component{
render(){
    let alllists = <p>No Data Found!</p>;
    // let alllists = null;
    if (this.props.lists.length > 0) {
        console.log('alllist data', this.props.lists)
        alllists = this.props.lists.map((resturant, index) =>{
            return (
            <div className="list-item" key={index} >
            <List resturant={resturant} map={this.props.map}/>
            <ListTail heartAll={this.props.heartAll} deleteAList={this.props.deleteAList} resturant={resturant} key={index} id={index}/>
            </div>)
        });
    }
    return(
          <div className="list">
              {alllists}
          </div>
    )
}


}