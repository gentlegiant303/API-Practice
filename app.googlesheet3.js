    const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
    const btn = document.querySelector('button');
    const output = document.querySelector('.output');
    btn.addEventListener('click', sData);
     
function sData(){
    let val1 = document.querySelector('input[name="name"]').value || 'Unkown';
    let val2 = document.querySelector('input[name="message"]').value || 'Message'
    let arr = [val1, val2];
    let formData = new FormData();
    formData.append('data', JSON.stringify(arr));
    fetch(url, {
        method: 'POST',
        body: formData
    }).then(function (rep){
        return rep.json()
    }).then(function(data) {
        console.log(data)
    })
}