// username: JasonTGirouard
// password: Girouard
// REACT IS A FICKLE, WEAK MAN.
// HOW IS THIS FUNCTION SUPPOSED TO PERSIST THE GLOBAL STATE. FUCKING HOW?

export function RegisterUser(creds) {
  // I just took the sample call verbatim and placed a username and password there
  return fetch(
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: creds.username,
          password: creds.password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}

export function LoginUser(creds) {
  return fetch(
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: creds.username,
          password: creds.password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}

export async function getPosts(token) {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    const posts = data.data.posts;
    return posts;
  } catch (error) {
    throw error;
  }
}

export function createPost(post, token) {
  return fetch(
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}
export async function getUserPostsAndMessages(token) {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function sendPostMessage(post_id, token, message) {
 
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts/${post_id}/messages`,
    {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
 
  body: JSON.stringify({
    message: {
      content: `${message}`
    }
  })
})
    const data = await response.json();
    return data;
} catch (error) {throw error }}


export async function deletePost(post_id, token) {
  
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts/${post_id}`,
    {
      method: 'DELETE',
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
 
 
})
    const data = await response.json();
    return data;
} catch (error) {throw error }}
  




