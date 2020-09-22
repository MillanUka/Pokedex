export const POKE_API = "https://pokeapi.co/api/v2/";
export async function getData(url, setFunction) {
    await fetch(url)
      .then(
        async function (response) {
          if (response.status !== 200) {
            alert('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          await response.json().then(function (data) {
            setFunction(data);
          });
        }
      )
      .catch(function (err) {
        console.log("There was a problem")
      });
  }
