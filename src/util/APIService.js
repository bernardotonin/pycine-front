import axios from "axios";

export const getFilmes = async () => {
  const res = await fetch(`http://localhost:8080/movie/list`);
  const text = await res.json();
  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}

export const getUsers = async () => {
  const res = await fetch(`http://localhost:8080/user/list`);
  const text = await res.json();
  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}

export const getUserById = async (user_id) => {
  const res = await fetch(`http://localhost:8080/user/list/${user_id}`);
  const text = await res.json();
  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}

export const getActorByName = async (name) => {
  const res = await fetch(`http://localhost:8080/movie/actor?query=${name}`);
  const text = await res.json();
  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}


export const getActor = async (actor_id) => {
  const res = await fetch(`http://localhost:8080/movie/actor/${actor_id}`);
  const text = await res.json();
  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}

export const createUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8080/user/create', {
    "email": email,
    "password": password
  })
    return 'User Created Sucessfully';
  } catch (error) {
    return error;
  }
  
}
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/user/delete/${parseInt(id)}`)
    return 'User Deleted Sucessfully';
  } catch (error) {
    return error;
  }
}

export const addFavorite = async (user_id, title, description, bannerUrl, tmdb_id) => {
  try {
    const response = await axios.post('http://localhost:8080/user/favorite/add', {
    "user_id": parseInt(user_id),
    "title": String(title),
    "description": String(description),
    "bannerUrl": String(bannerUrl),
    "tmdb_id": parseInt(tmdb_id)
  })
    return 'Favorite Added';
  } catch (error) {
    return error;
  }
}

export const removeFavorite = async (user_id, title) => {
  try {
    const response = await axios.delete(`http://localhost:8080/user/favorite/remove/${user_id}?title=${title}`)
    return 'Favorite Removed';
  } catch (error) {
    return error;
  }
}

export const addFavoriteActor = async (user_id, name, bio, profileUrl, tmdb_actor_id) => {
  try {
    const response = await axios.post('http://localhost:8080/movie/actor/favorite/add', {
    "user_id": parseInt(user_id),
    "name": String(name),
    "bio": String(bio),
    "profileUrl": String(profileUrl),
    "tmdb_actor_id": parseInt(tmdb_actor_id)
  })
    return 'Favorite Added';
  } catch (error) {
    return error;
  }
}

export const removeFavoriteActor = async (user_id, name) => {
  try {
    const response = await axios.delete(`http://localhost:8080/movie/actor/favorite/remove/${user_id}?name=${name}`)
    return 'Favorite Removed';
  } catch (error) {
    return error;
  }
}