import data from "./data/pokemon-list.json";

export const POKE_API = "https://pokeapi.co/api/v2/";
export const SEARCH_LIMIT = 20;
export async function getData(url, setFunction) {
  await fetch(url)
    .then(async function (response) {
      if (response.status !== 200) {
        alert(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      await response.json().then(function (data) {
        setFunction(data);
      });
    })
    .catch(function (err) {
      console.log(err)
      console.log(url)
      console.log("There was a problem");
    });
    
}

export async function getPokemonData(url) {
  return await fetch(url)
    .then(async function (response) {
      if (response.status !== 200) {
        alert(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      return await response.json().then(function (data) {
        return data;
      });
    })
    .catch(function (err) {
      console.log("There was a problem");
    });
}
export function removePunctuation(originalString, replaceChar) {
  return originalString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, replaceChar);
}

export function splitArray(originalArr, size) {
  var arr = [];
  for (var i = 0; i < originalArr.length; i += size) {
    arr.push(originalArr.slice(i, i + size));
  }
  return arr;
}

export function searchPokemon(query) {
  return splitArray(
    data.results.filter((item) => {
      return item.name.includes(query);
    }),
    SEARCH_LIMIT
  );
}
