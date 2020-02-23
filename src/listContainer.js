import React from 'react';
import List from './list';
import ListTail from './list-tail';

export default class ListContainer extends React.Component{
render(){
    const alllists = this.props.lists.map((resturant, index) =>{
        return (
        <div className="list-item">
        <List key={index} resturant={resturant} />
        <ListTail resturant={resturant}/>
        </div>)
    });
    return(
          <div className="list">
              {alllists}
          </div>
    )
}


}