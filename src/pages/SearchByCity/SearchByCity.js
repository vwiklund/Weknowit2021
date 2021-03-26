import React, { Component } from "react";
import MyForm from "../../components/MyForm/MyForm";
import testForErrorCity from "./testForErrorCity";
import RedirectSearchByCity from "./RedirectSearchByCity";

const API_KEY = "weknowit"; //Apikey for geonames.org

class SearchByCity extends Component {
  state = {
    population: undefined,
    city: undefined,
    error: undefined,
    loading: false,
  };

  getPopulation = async (e) => {
    // async function with Api Call
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const input = e.target.elements.input.value; //Get input from MyForm on submit
    const api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${input}&maxRows=10&featureClass=P&username=${API_KEY}`
    );
    const data = await api_call.json(); //format to .json()
    console.log(data.geonames);
    const error = testForErrorCity(input, data); //Testing recieved data for errors

    //Setting states based on data from apicall
    if (!error) {
      this.setState({
        population: data.geonames[0].population,
        city: data.geonames[0].name,
        loading: false,
      });
    } else {
      this.setState({
        error: error,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div>
        <header>
          <b>SEARCH BY CITY</b>

          <div>{this.state.loading && <h1>laddar</h1>}</div>
        </header>
        <MyForm ph="Enter a country" onSubmit={this.getPopulation} />
        <RedirectSearchByCity
          error={this.state.error}
          city={this.state.city}
          population={this.state.population}
        />
      </div>
    );
  }
}

export default SearchByCity;
