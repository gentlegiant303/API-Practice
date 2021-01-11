const url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);
 
function getData(e) {
  e.preventDefault();
  fetch(url).then(function (res) {
    return res.json()
  }).then(function (data) {
   
      mHTML(data.items);
  }).catch(function (e){
      console.log(e);
  })
}
 
function mHTML(val) {
  output.innerHTML = "";
  for (let x = 1; x < val.length; x++) {
    console.log(val[x].question_id);
    let div = document.createElement('div');
    div.innerHTML = `${val[x].question_id} <a href="${val[x].link}" target="_blank">${val[x].title}</a>`;
    output.appendChild(div);
    
      }}