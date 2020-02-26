import React from "react";
import ListContainer from "./listContainer";
import Giphy from "./giphy";
import A from "./a";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resturantName: "",
      cusine: "",
      comment:'',
      lists: [],
      resturantNameObj: {},
      img: "",
      fav: [],
      countery: ["Saudi Arabia", "Kwaity", "Bahrain"],
     

    };
  }

  handleChangeRS = event => {
    // console.log(event.target.value)
    this.setState({ resturantName: event.target.value });
  };
  handleChangeCU = e => {
    console.log(e.target.value);
    this.setState({ cusine: e.target.value })
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.resturantName != "") {
      console.log(this.state.resturantNameObj);

      console.log(this.state.lists);
      this.setState({
        lists: [
          ...this.state.lists,
          {
            name: this.state.resturantName,
            cusine: this.state.cusine,
            comment:this.state.comment,
          }
        ],
        resturantName: "",
        cusine: "",
        comment:"",
        checkedToDelet: "false",
        delete: [],
      });
    }
  };
  // when youser click in on list to delete it
  // new arry of list
  handleDeleteAll = event => {
    // if (checkedToDelet){
    event.preventDefault();
    console.log(this.state.lists);
    this.setState({ lists: [] });
    console.log(this.state.lists.length);
  };
  handlerDeleteAList = indexDelet => {
    const newLists = [...this.state.lists];
    newLists.splice(indexDelet, 1);
    this.setState({
      lists: newLists,
      selected: false
    });
  };
  deleteSelected = resturant => {
    console.log(resturant + "delet me");
    //  const newdelete=[...this.state.delete];
    //  newdelete.push(resturant);
    this.setState({
      delete: [...this.state.delete, resturant],
      selected: true
    });
  };
  handleDeleteSelected = () => {
    console.log(this.state.delete.length);
    const newarr = [...this.state.lists];
    this.state.delete.map(restdel => {
      console.log(restdel);
      console.log(this.state.lists);
      this.state.lists.map(restlist => {
        console.log(restlist);
        if (restdel.name === restlist.name && (this.state.selected = true)) {
          console.log("match");
          // const newarr = [...this.state.lists]
          let index = newarr.indexOf(restlist);
          console.log(index);
          newarr.splice(index, 1);
          console.log(newarr.length);
          //  this.setState({lists:newarr ,delete:[]})
          //  this.setState({lists:[...this.state.lists, ]]})
        }
      });
    });
    this.setState({ lists: newarr, delete: [] });
  };
  map = () => {
    window.open("https://www.google.com/maps");
  };
  giveMeMood = url => {
    this.state.img = url;
  };
  imgtoApper = giphy => {
    this.setState({ img: giphy });
  };

  favAll = obj => {
    console.log(obj);
    const newfav = [...this.state.fav];
    newfav.push(obj);
    this.setState({ fav: newfav });
  };
  textArea = (e)=>{
    this.setState({comment:e.target.value})
    console.log(this.state.comment)
  }
  counterySl = (e)=>{
    this.setState({setState:e.target.value})
  }
  render() {
    const allCont=this.state.countery.map((cont, index) => {
      return (<option value={cont} 
              checked={this.state.countery === this.value}>
              {index+1}. {cont}
            </option>)
            // selected
    });
    
    return (
      <div className="jumbotron text-center">
        <h1>Let's Eat</h1>
        <div className="mood-area">
          <img
            src={this.state.img}
            className="rounded"
            className="giphy-name"
          ></img>
          <br />
          <Giphy imgto={this.imgtoApper} /> <br />
        </div>
        <div className="form">
          {/* <label>Add Your Favorite Resturant: </label>
        <input 
        type="text"
        name="resturantName"
        placeholder="I like ....."
        value={this.state.resturantName}
        onChange={this.handleChangeRS} /><br/> */}
          <div className="form-group">
            <label for="formGroupExampleInput">
              Add Your Favorite Resturant:
            </label>
            <input
              onChange={this.handleChangeRS}
              value={this.state.resturantName}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="I like ....."
            />
          </div>
          <label>Cousine : </label>

          <div class="form-check">
            <input
              onChange={this.handleChangeCU}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Arabic Food"
              checked={this.state.cusine === 'Arabic Food'}
            />
            <label class="form-check-label" for="exampleRadios1">
              Arabic 
            </label>
          </div>

          <div class="form-check">
            <input
              onChange={this.handleChangeCU}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Aisan Food"
              checked={this.state.cusine === 'Aisan Food'}
            />
            <label class="form-check-label" for="exampleRadios1">
               Aisan
            </label>
          </div>

          <div class="form-check">
            <input
              onChange={this.handleChangeCU}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Indain Food "
              checked={this.state.cusine === 'Indain Food '}
            />
            <label class="form-check-label" for="exampleRadios1">
            Indain 
            </label>
          </div>
          
          <div class="form-check">
            <input
              onChange={this.handleChangeCU}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Italian Food "
              checked={this.state.cusine === 'Italian Food '}
            />
            <label class="form-check-label" for="exampleRadios1">
            Italian 
            </label>
          </div>

          <div class="form-check">
            <input
              onChange={this.handleChangeCU}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Fast Food "
              checked={this.state.cusine === 'Fast Food '}
            />
            <label class="form-check-label" for="exampleRadios1">
            Fast Food
            </label>
          </div>

          <div class="form-check">
            <input
              onChange={this.handleChangeCU}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Coffee Shop"
              checked={this.state.cusine === 'Coffee Shop'}
            />
            <label class="form-check-label" for="exampleRadios1">
            Coffee Shop 
            </label>
          </div>
          
{/* RRTR:{allCont} */}
        
           <select id="countySel" size="1"  >
          {allCont} </select>
          {console.log(allCont)}
           <br/>
         
           
          {/* <label>location</label><button onClick={this.map}>find my resturant</button><br/> */}
          
          <label>Comments :</label><br/>
          <textarea onChange={this.textArea} value={this.state.comment}></textarea> <br/>
          <button
            onClick={this.handleSubmit}
            type="submit"
            class="btn btn-warning"
          >
            Submit
          </button>
          <br />

          <button onClick={this.handleDeleteAll}>Delete All</button>
          <button onClick={this.handleDeleteSelected}>Delete </button>
          <button onClick={this.favAllDisplay}>view All Favorites</button>
          <br />
        </div>
        <div>
          <ListContainer
            lists={this.state.lists}
            deleteSelected={this.deleteSelected}
            deleteAList={this.handlerDeleteAList}
            heartAll={this.favAll}
            googlemap={this.map}
          />
        </div>

        <hr />
        <h3>My Favs</h3>
        <ListContainer
          lists={this.state.fav}
          deleteSelected={this.deleteSelected}
          deleteAList={this.handlerDeleteAList}
          heartAll={this.favAll}
          googlemap={this.map}
        />
      </div>
    );
  }
}
