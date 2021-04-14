import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

export class App extends Component {


  handleSubmit(){

    axios.get('db.json')
    .then(function (response) {
      // handle success
      var strArray = [];
      for(var obj of response.data){
        strArray.push(obj.id);
      }

      var counting = {};
      strArray.forEach(function (str) {
          counting[str] = (counting[str] || 0) + 1;
      });

      if (Object.keys(counting).length !== strArray.length) {

          var str;
          for (str in counting) {
              if (counting.hasOwnProperty(str)) {
                  if (counting[str] > 1) {
                      console.log(str);
                  }
              }
          }
      }

      for(var obj of response.data){
        if( ((obj.zip === undefined) && (obj.zip == null) && (obj.zip == ""))   || ((obj.name === undefined) && (obj.name == null) && (obj.name == null)) || ((obj.address === undefined) && (obj.address == null) && (obj.address == null))    ){
          console.log(obj.id);
        }        
      }


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

  render(){

      return (
        <div className="App">

          <form  >
            <button type="button" onClick={this.handleSubmit.bind(this)}>Proceed</button>
          </form>

      </div>
    );
  }
}

export default App;