import React, { Component } from "react";
import MyForm from "../../components/MyForm/MyForm";
import testForErrorCountry from "./testForErrorCountry";
import getCities from "./getCities";
import RedirectSearchByCountry from "../SearchByCountry/RedirectSearchByCountry";

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
    console.log(data.geonames);

    const error = testForErrorCountry(input, data);
    //Testing input with searchdata provided to check for errors
    if (!error) {
      //If no error found, proceed with a second apicall searching for cities sorted by population
      console.log(data.geonames[0].countryName);
      console.log("poop = " + data.geonames[0].population);
      console.log("city = " + data.geonames[0].name);
      console.log("type = " + data.geonames[0].fclName.split(",")[0]);
      console.log("country = " + data.geonames[0].countryName);

      const countryCode = data.geonames[0].countryCode;
      console.log("Country code = " + countryCode);

      const api_call2 = await fetch(
        `http://api.geonames.org/searchJSON?q=${data.geonames[0].countryName}&cities=cities1000&maxRows=5&orderby=population&country=${countryCode}&style=LONG&lang=eng&username=${API_KEY}`
        //`http://api.geonames.org/searchJSON?q=${input}&orderby=population&maxRows=500&style=LONG&lang=eng&username=${API_KEY}`
      );

      const data2 = await api_call2.json(); //format to .json()
      console.log(data2.geonames);

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
  render() {
    return (
      <div>
        <header>
          <b>SEARCH BY COUNTRY</b>

          <div>{this.state.loading && <h1>laddar</h1>}</div>
        </header>
        <MyForm ph="Enter a country" onSubmit={this.getPopulation} />
        <RedirectSearchByCountry
          error={this.state.error}
          city={this.state.city}
          population={this.state.population}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default SearchByCountry;
