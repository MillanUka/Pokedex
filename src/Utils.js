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
      console.log(url);
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
  console.log(arr);
}

export function searchPokemon(query) {
  var i = 0;
  return data.results.filter((item) => {
    i++;
    if (i > SEARCH_LIMIT) {
      return;
    }
    return item.name.includes(query);
  });
}
