function createCityReplacer(CSV) {
    const cities = CSV.split(/,\n|#\n|\n#|\n/)
      .filter((e) => !e.includes("#"))
      .map((e) => {
        const obj = {};
        const value = e.split(",");
        obj["X"] = +value[0];
        obj["Y"] = +value[1];
        obj["Name"] = value[2];
        obj["population"] = +value[3];
        return obj;
      })
      .sort((a, b) => b.population - a.population)
      .slice(0, 10)
      arr = cities.reduce((obj2, city, index) => {
        const key = "rating";
        city[key] = index + 1;
        const cityName = city.Name;
        obj2[cityName] = city;
        return obj2;
      }, {});
      console.log(arr);
    return () => {
      let str = `Місто Київ 1 в цьому списку,потім йде Харків,Біла Церква,Бердичів,Вінниця і т.д`;
      str = str.replace("Київ",arr.Name);
      str = str.replace("Харків",arr.Name);
      str = str.replace("Біла Церква",arr.Name);
      str = str.replace("Бердичів",arr.Name);
      str = str.replace("Вінниця",arr.Name);
      return str;
    };
}
  
const CSV ="44.38,34.33,Алушта,31440,\n49.46,30.17,Біла Церква,200131,\n49.54,28.49,Бердичів,87575,#некоммент\n#46.49,36.58,#Бердянськ,121692,\n49.15,28.41,Вінниця,356665,\n#45.40,34.29,Джанкой,43343,\n41.38,54.33,Житомир,264318,\n45.32,34.75,Київ,2611327,\n51.32,63.23,Харків,1470902,\n23.53,12.51,Одеса,1029049,\n32.54,16.12,Кропивницький,225339,\n32.34,31.64,Маріуполь,436569,\n12.32,23.63,Херсон,286958,\n12.4,12.5,Суми,262119,\n74.12,42.12,Сімферополь,342054";
  
const cityReplacer = createCityReplacer(CSV);
console.log(cityReplacer(cityReplacer));