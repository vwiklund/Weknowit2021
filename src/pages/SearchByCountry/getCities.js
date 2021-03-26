function getCities(data) {
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

/* let i = 0;
        let j = 0;
        const Cities = [undefined, undefined, undefined];
        while (i < 3) {
          if (data2.geonames[j].fclName.split(",")[0] === "city") {
            Cities[i] = data2.geonames[j];
            i++;
            console.log(j);
          }
  
          j++;
        } */
