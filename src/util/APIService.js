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

export const addFavorite = async (user_id, title, description, bannerUrl) => {
  try {
    const response = await axios.post('http://localhost:8080/user/favorite/add', {
    "user_id": parseInt(user_id),
    "title": String(title),
    "description": String(description),
    "bannerUrl": String(bannerUrl)
  })
    return 'Favorite Added';
  } catch (error) {
    return error;
  }
}
