import React from 'react';
import List from './list';
// import ListTail from './list-tail';


export default class ListContainer extends React.Component{
render(){
     
    let alllists = null;
    
    if (this.props.lists.length > 0) {
        console.log('alllist data', this.props.lists)
        alllists = this.props.lists.map((resturant, index) =>{
            return (
             <div className="list-item"  > 
             {/* key={index} */}
            <List resturant={resturant} index ={index} key ={index} map={this.props.map} deleteSelected={this.props.deleteSelected} deleteAList={this.props.deleteAList}  heartAll={this.props.heartAll} fav={this.props.fav} notHeart ={this.props.notHeart} isFav = {this.props.isFav}/>

            {/* <ListTail heartAll={this.props.heartAll} deleteAList={this.props.deleteAList} resturant={resturant} key={index} id={index}/> */}
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