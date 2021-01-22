const id = '1L8uoxEfdkG1TNRNqgiKfD9XXGVhGO6uUXoweksPr1Kg';
const url = 'https://spreadsheets.google.com/feeds/list/' + id + '/1/public/values?alt=json';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData(){
    fetch(url).then(function(res){
                    return res.json()
                    }).then(function(data){
                        console.log(data.feed.entry);
                        data.feed.entry.forEach(function(val){
                            let temp = [];
                            for(const key in val){
                                if(key.substring(0,3) == 'gsx'){
                                    console.log(val[key]['$t']);
                                    temp.push(val[key]['$t']);
                                }
                            }
                            console.log(temp);
                        })
                    })
}