import React from "react";
import ListContainer from "./listContainer";
import Giphy from "./giphy";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resturantName: "",
      cusine: "",
      comment: "",
      lists: [],
      resturantNameObj: {},
      img: "",
      fav: [],
      isFav: false,
      district: [
        "Hitten",
        "Mohammadyah",
        "Alnakeel",
        "Olaya",
        "Almaazer",
        "Almlqa",
        "Alyasmen",
        "Alsahafah",
        "Altahlyah",
        "Almueuj",
        "Alaqiq",
      ],
      selectedDistrict: "Saudi Arabia",
      class: "hide"
    };
  }
  handleChangeSelect = event => {
    // console.log(event.target.value)
    // console.log(event.target)
    this.setState({ selectedCountry: event.target.value });
  };
  handleChangeRS = event => {
    // console.log(event.target.value)
    this.setState({ resturantName: event.target.value });
  };
  handleChangeCU = e => {
    console.log(e.target.value);
    this.setState({ cusine: e.target.value });
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
            comment: this.state.comment,
            districtSelected: this.state.selectedDistrict
          }
        ],
        resturantName: "",
        cusine: "",
        comment: "",
        checkedToDelet: "false",
        delete: [],
        countrySelected: "Saudi Arabia"
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
    const newarr = [...this.state.lists];
    this.state.delete.map(restdel => {
      this.state.lists.map(restlist => {
        console.log(restlist);
        if (restdel.name === restlist.name && (this.state.selected = true)) {
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
  favAllDisplay = () => {
    this.setState({ class: "display" });
  };
  favAllDisplay2 = () => {
    this.setState({ class: "hide" });
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
    this.setState({ fav: newfav, isFav: true });
  };
  notHeart = res => {
    if (this.state.fav.length > 0 ) {
      const newarr = [...this.state.fav];
      this.state.fav.map(lis => {
        console.log(res.name);
        console.log(lis.name);

        if (res.name === lis.name) {
          console.log("h44");
          let index = newarr.indexOf(res);
          console.log(index);
          console.log("h2");
          newarr.splice(index, 1);
          console.log(newarr.length);
        }
      });

      this.setState({ fav: newarr, isFav: false });
    }
  };
  textArea = e => {
    this.setState({ comment: e.target.value });
    console.log(this.state.comment);
  };
  districtSl = e => {
    this.setState({ setState: e.target.value });
  };
  render() {
    const allDistrict = this.state.district.map((cont, index) => {
      return (
        <option value={cont} checked={this.state.district === this.value}>
          {index + 1}. {cont}
        </option>
      );
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
              checked={this.state.cusine === "Arabic Food"}
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
              checked={this.state.cusine === "Aisan Food"}
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
              checked={this.state.cusine === "Indain Food "}
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
              checked={this.state.cusine === "Italian Food "}
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
              checked={this.state.cusine === "Fast Food "}
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
              checked={this.state.cusine === "Coffee Shop"}
            />
            <label class="form-check-label" for="exampleRadios1">
              Coffee Shop
            </label>
          </div>
          {/* RRTR:{allCont} */}
          <select
            id="distictSel"
            size="1"
            value={this.state.selectedDistrict}
            onChange={this.handleChangeSelect}
          >
            {allDistrict}
          </select>
          {/* {console.log(a)} */}
          <br />
          {/* <label>location</label><button onClick={this.map}>find my resturant</button><br/> */}
          <label>Comments :</label>
          <br />
          <textarea
            onChange={this.textArea}
            value={this.state.comment}
          ></textarea>{" "}
          <br />
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
          <button type="button" value="Click" onClick={this.favAllDisplay}>
            View All Favorites
          </button>
          <button type="button" value="Click" onClick={this.favAllDisplay2}>
            Hid All Favorites
          </button>
          <br /><br /><br />
        </div>
        <div>
          <ListContainer
            lists={this.state.lists}
            deleteSelected={this.deleteSelected}
            deleteAList={this.handlerDeleteAList}
            heartAll={this.favAll}
            fav={this.fav}
            notHeart={this.notHeart}
            isFav={this.isFav}
          />
        </div>

        <hr />
        <div className={this.state.class}>
          <h3>My Favs</h3>
          <ListContainer
            lists={this.state.fav}
            deleteSelected={this.deleteSelected}
            deleteAList={this.handlerDeleteAList}
            heartAll={this.favAll}
            favVeiw={this.favVeiw}
            fav={this.fav}
            notHeart={this.notHeart}
            isFav={this.isFav}
          />
        </div>
      </div>
    );
  }
}


// <div class="body"><h1>Let's Eat</h1>
//     <Form className="lolo" >
//           <Form.Group controlId="exampleForm.ControlInput1">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" />
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Example select</Form.Label>
//             <Form.Control as="select">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlSelect2">
//             <Form.Label>Example multiple select</Form.Label>
//             <Form.Control as="select" multiple>
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Example textarea</Form.Label>
//             <Form.Control as="textarea" rows="3" />
//           </Form.Group>
//         </Form> 