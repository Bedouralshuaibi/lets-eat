import React from 'react';
import Stars from './stars';
import { MdDeleteForever } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default class ListTail extends React.Component
{ constructor(props){
    super(props);
    this.state = {
    stars:[<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>],
    counter:0
}
}
    
    deleteClicked = (e)=>{
        console.log("delete resturant")
        // this.props.resturant = this.props.resturant(this)
        this.props.deleteAList(this.props.id);
    }
    togelFullStar = (index)=>{
        const starterCounter = this.state.counter;
        if (starterCounter === index ){
        const newStars=[...this.state.stars]
        // newStars.splice(index);
        newStars.splice(index,1,<IoIosStar size={22}/>);
        this.setState({
        stars:newStars,
        })
        const counterPlus = starterCounter + 1;
        this.setState({counter:counterPlus});
    } 
    }
    render(){
        const allstars = this.state.stars.map((star,index)=>{
            return (
                <div >
                <Stars star={star} key={index} id={index} togelStar={this.togelFullStar} />
                </div>)
        })
        return(
            <section className="list-item-tail">
            <div className="stars">
                {allstars}
                
            </div>
            <span onClick={this.deleteClicked} className="icon"><MdDeleteForever size={27}/></span>
            </section>

        )
    }
}
 