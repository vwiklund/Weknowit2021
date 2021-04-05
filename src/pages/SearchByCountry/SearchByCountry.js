import React, { Component } from "react";
import MyForm from "../../components/MyForm/MyForm";
import testForErrorCountry from "./testForErrorCountry";
import getCities from "./getCities";
import RedirectSearchByCountry from "../SearchByCountry/RedirectSearchByCountry";
import ClipLoader from "react-spinners/ClipLoader";
import "../styling.css";

const API_KEY = "weknowit"; //ApiKey for url

class SearchByCountry extends Component {
  state = {
    country: undefined,
    city: undefined,
    population: undefined,
    error: undefined,
    loading: false,
  };
  getPopulation = async (e) => {
    // getPopulation function with Api Call
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const input = e.target.elements.input.value;
    const api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${input}&featureClass=A&maxRows=5&style=LONG&lang=eng&username=${API_KEY}`
      //Apicall searching specific for countries.
    );
    const data = await api_call.json(); //format to .json()
    console.log(data);
    const error = testForErrorCountry(input, data);
    //Testing input with searchdata provided to check for errors
    if (!error) {
      //If no error found, proceed with a second apicall searching for cities sorted by population

      const countryCode = data.geonames[0].countryCode;
      const api_call2 = await fetch(
        //Apicall specific to search for cities sorted by population with fix countrycode
        `http://api.geonames.org/searchJSON?q=${data.geonames[0].countryName}&cities=cities1000&maxRows=5&orderby=population&country=${countryCode}&style=LONG&lang=eng&username=${API_KEY}`
      );

      const data2 = await api_call2.json(); //format to .json()

      const Cities = getCities(data2); //returning the three most populated cities for searched country

      this.setState({
        population: [
          Cities[0].population,
          Cities[1].population,
          Cities[2].population,
        ],
        city: [Cities[0].name, Cities[1].name, Cities[2].name],
        country: data.geonames[0].countryName,
        loading: false,
      });
    } else {
      this.setState({
        error: error,
        loading: false,
      });
    }
  };
  //Renders search by resaults page
  render() {
    return (
      <div>
        <div className="subtitle">
          <header>
            <b>SEARCH BY COUNTRY</b>
          </header>
        </div>
        <div className="center">
          <MyForm ph="Enter a country" onSubmit={this.getPopulation} />
        </div>
        <div className="center">
          <div>{this.state.loading && <ClipLoader size={50} />}</div>
        </div>
        <RedirectSearchByCountry
          error={this.state.error}
          country={this.state.country}
          city={this.state.city}
          population={this.state.population}
        />
      </div>
    );
  }
}

export default SearchByCountry;
