function formatOutput(str) {
  // format input to capilatize first letter
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join(" ");
}

function testForErrorCity(input, data) {
  var error = "";
  const formattedOutput = formatOutput(input);

  if (input === "") {
    //check for empty input
    error = "please enter a city...";
  } else if (!data.geonames) {
    //Check if we get a responce from apicall
    error = "Could not fetch data from server, please try again later ";
  } else if (data.geonames.length === 0) {
    //check if any resaults found
    error = "No search resault found for " + formattedOutput;
  } else if (
    //check if we get a close call
    formattedOutput !== data.geonames[0].name &&
    data.geonames[0].fclName.split(",")[0] === "city"
  ) {
    error = "did you mean " + data.geonames[0].name + "?";
  }
  return error;
}

export default testForErrorCity;
