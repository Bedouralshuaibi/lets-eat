import React from "react";
import Stars from "./stars";
// import { MdDeleteForever } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ListTail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [
        <IoIosStarOutline size={22} />,
        <IoIosStarOutline size={22} />,
        <IoIosStarOutline size={22} />,
        <IoIosStarOutline size={22} />,
        <IoIosStarOutline size={22} />
      ],
      counter: 0,
      heart: this.props.resturant.heart || <IoIosHeartEmpty size={27} />,
      favFlag: false
    };
  }

  togelFullStar = index => {
    const starterCounter = this.state.counter;
    if (starterCounter === index) {
      const newStars = [...this.state.stars];
      // newStars.splice(index);
      newStars.splice(index, 1, <IoIosStar size={22} />);
      this.setState({
        stars: newStars
      });
      const counterPlus = starterCounter + 1;
      this.setState({ counter: counterPlus });
    }
  };
  favClicked = e => {
    console.log("click HEART");
    if (!this.state.favFlag) {
      this.setState({ heart: <IoIosHeart size={27} />, favFlag: true });
      // fav:[...this.state.fav]
      // console.log(this.state.fav)
      console.log("this.props.resturantobj", this.props.resturant);
      this.props.heartAll({
        ...this.props.resturant,
        heart: <IoIosHeart size={27} />
      });
    } else {
      console.log("click HEART ELSE");
      this.setState({ heart: <IoIosHeartEmpty size={27} />, favFlag: false });
    }
  };

  render() {
    const allstars = this.state.stars.map((star, index) => {
      return (
        <div>
          <Stars
            star={star}
            key={index}
            id={index}
            togelStar={this.togelFullStar}
          />
        </div>
      );
    });
    return (
      <section className="list-item-tail">
        <div className="stars">{allstars}</div>
         <span onClick={this.favClicked} className="heart" >
          {this.state.heart}
        </span>
        
        {/* <span onClick={this.deleteClicked} className="icon"><MdDeleteForever size={27}/></span> */}
      </section>
    );
  }
}

// import React from 'react';
// import Stars from './stars';
// import { MdDeleteForever } from "react-icons/md";
// import { IoIosStarOutline } from "react-icons/io";
// import { IoIosStar } from "react-icons/io";
// import { IoIosHeartEmpty} from "react-icons/io";
// import { IoIosHeart} from "react-icons/io";

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// export default class ListTail extends React.Component
// { constructor(props){
//     super(props);
//     this.state = {
//     stars:[<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>,<IoIosStarOutline size={22}/>],
//     counter:0,
//     heart: this.props.resturant.heart || <IoIosHeartEmpty size={27}/>,
//     favFlag: false,

// }
// }

//     deleteClicked = (e)=>{
//         console.log("delete resturant")
//         // this.props.resturant = this.props.resturant(this)
//         this.props.deleteAList(this.props.id);
//     }
//     togelFullStar = (index)=>{
//         const starterCounter = this.state.counter;
//         if (starterCounter === index ){
//         const newStars=[...this.state.stars]
//         // newStars.splice(index);
//         newStars.splice(index,1,<IoIosStar size={22}/>);
//         this.setState({
//         stars:newStars,
//         })
//         const counterPlus = starterCounter + 1;
//         this.setState({counter:counterPlus});
//     }
// }
//     favClicked = (e)=>{
//         console.log("click HEART")
//         if (!this.state.favFlag)
//         {

//             this.setState({heart:<IoIosHeart size={27}/> ,
//                  favFlag:true,
//                 })
//                 // fav:[...this.state.fav]
//                 // console.log(this.state.fav)
//                 console.log('this.props.resturantobj', this.props.resturant)
//             this.props.heartAll({...this.props.resturant,heart:<IoIosHeart size={27}/>})
//         } else {
//             console.log("click HEART ELSE")
//             this.setState({heart:<IoIosHeartEmpty  size={27}/> ,
//                  favFlag:false,
//                 })

//         }
//     }

//     render(){
//         const allstars = this.state.stars.map((star,index)=>{
//             return (
//                 <div >
//                 <Stars star={star} key={index} id={index} togelStar={this.togelFullStar} />
//                 </div>)
//         })
//         return(
//             <section className="list-item-tail">
//             <div className="stars">
//                 {allstars}
//             </div>
//             <span onClick={this.favClicked} className="icon">{this.state.heart}</span>
//             <span onClick={this.deleteClicked} className="icon"><MdDeleteForever size={27}/></span>
//             </section>

//         )
//     }
// }
