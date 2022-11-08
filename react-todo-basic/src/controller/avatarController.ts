async function fetchAvatar(): Promise<string> {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => data.message)
    .catch((err) => {
      console.log("error fetching avatar", err);
      return "no avatar";
    });
}

export default fetchAvatar;
