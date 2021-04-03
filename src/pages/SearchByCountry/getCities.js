function getCities(data) {
  //Funcion that returns the 3 biggest cities from jsondata provided from api call
  const Cities = [undefined, undefined, undefined];
  let i = 0;
  let j = 0;
  while (i < 3) {
    if (data.geonames[j].fclName.split(",")[0] === "city") {
      Cities[i] = data.geonames[j];
      console.log(i);
      i++;
    }

    console.log(j);
    j++;
  }
  console.log("cities = " + Cities);

  return Cities;
}
export default getCities;
