    const url = "json.json";
    const output = document.querySelector('.output');
    let xHR = new XMLHttpRequest();
    xHR.open('GET', url);
    xHR.responseType = 'json';
    xHR.onload = function () {
      console.log(xHR.response);
      let data = xHR.response;
      data.books.forEach(function (val) {
        output.innerHTML += val.title + '<br>';
      })
    }
    xHR.send();
    console.log(xHR);
    fetch(url).then(function (res) {
      return res.json()
    }).then(function (data) {
      console.log(data.books);
      data.books.forEach(function (val) {
        output.innerHTML += val.title + '<br>';
      })
    }).catch(function (error) {
      console.log(error);
    })

fetch(url).then(res => res.json())
    .then(json => {
          console.log(json.books)
          json.books.forEach(val =>{output.innerHTML += val.title + '<br>';})}
         )