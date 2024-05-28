import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Get API Token which will be used for subsequence API calls
async function getToken() {
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:
      JSON.stringify({
        "email": form.email,
        "password":form.password
      })
  };

  const res = await fetch(
    `http://${API_URL}/users/meditate/Lanna@gmail.com`,
    authParameters
  );
  const resJson = await res.json();
  console.log(resJson);
  console.log("Response is " + resJson);
  const token = resJson["access_token"];
  return token;
}

// Retrieve all albums that match the search term
async function searchSongs(accessToken, searchTerm) {
  console.log("Search term");
  const url = `https://api.spotify.com/v1/search?q=${searchTerm}&artist:blackpink&type=album`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
  const data = await res.json();
  console.log("DATA " + JSON.stringify(data));
  return data.albums.items.map((item) => {
    return {
      name: item.name,
      type: item.type,
      releaseDate: item.release_date,
    };
  });
}


export const useSpotify = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getToken();
        setAlbums(await getAlbums(accessToken));
        setLoading(false);
      } catch (e) {}
    })();
  }, []);
  console.log("Albums...");
  console.log(albums);
  return { loading, albums };
};


