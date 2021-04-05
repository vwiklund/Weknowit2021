function testForErrorCountry(input, data) {
  //Function that test data provided for error
  var error = "";
  if (!input.trim()) {
    error = "please enter a country...";
  } else if (!data.geonames) {
    error = "Could not fetch data from server, please try again later ";
  } else if (data.geonames.length === 0) {
    //check if geonames exists
    error = "No search resault found for " + input;
  } else if (data.geonames[0].fclName.split(",")[0] !== "country") {
    let i = 1;
    while (i < data.geonames.length) {
      if (data.geonames[i].fclName.split(",")[0] === "country") {
        error = "did you mean " + data.geonames[i].countryName;
      }
      i++;
    }
  }
  return error;
}

export default testForErrorCountry;
