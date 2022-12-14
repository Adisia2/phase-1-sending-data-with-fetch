// Add your code here
const submitData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "john",
      email: "john@gmail.com",
    }),
  };
  
  fetch("http://localhost:3000/users", submitData)
  .then(function (response) {
    return response.json();
  })
  .then(function (submitData) {
    console.log(submitData);
  });
