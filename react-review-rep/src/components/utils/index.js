export function RegisterUser() {
  console.log("testinRegisterUser");

  // I just took the sample call verbatim and placed a username and password there
  fetch(
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: "JasonTGirouard",
          password: "Girouard",
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}

export function LoginUser() {
  console.log("test login User");

  // again I just took the sample call verbatim but placed my username/password

  fetch("https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "JasonTGirouard",
        password: "Girouard",
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}

// I took the sample call and converted it to an async await function
// Im not sure why it is console logs the same data twice....it does that using either async await or a normal function

// export function getPosts() {

// return fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts')
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   // console.log('result',result)
//     const posts = result.data.posts
//     console.log('posts',posts)
//     return posts;
//   })
//   .catch(console.error);
// }


export async function getPosts() {
    console.log("test get Posts");
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts')
        const data = await response.json();
        const posts = data.data.posts
        console.log(posts)
        return posts;
    } 
    catch(error) {
        throw error
    }
    }
    
  