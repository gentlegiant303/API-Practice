    const url = 'https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc';
    const btn = document.querySelector('button');
    const output = document.querySelector('.output');
    btn.addEventListener('click', getData);

function getData(e){
    e.preventDefault;
fetch(url).then(function(res){
    return res.json();
}).then(function(data){
    mHTML(data.items);
})
}

function mHTML(val){
    output.innerHTML = "";
    for(let x=1;x,val.length;x++){
        console.log(val[x]);
        let div = document.createElement('div');
        div.xurl = val[x].url;
        div.innerHTML = `${val[x].name} ${val[x].description}`;
        output.appendChild(div);
        div.addEventListener('click',function(e){
            fetch(val[x].url).then(function(res){
                return res.json()
            }).then(function(data){
                console.log(data);
                let span = document.createElement('span');
                span.textContent = data.html_url;
                span.style.color ="red";
                div.appendChild(span);
            })
        },{once:true})
    }
}