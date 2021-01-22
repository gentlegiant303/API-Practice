    const id = '1L8uoxEfdkG1TNRNqgiKfD9XXGVhGO6uUXoweksPr1Kg';
    const url = 'https://spreadsheets.google.com/feeds/list/' + id + '/1/public/values?alt=json';
    const btn = document.querySelector('button');
    const output = document.querySelector('.output');
    btn.addEventListener('click', getData);
    const tbl = document.createElement('table');
    const tbdy = document.createElement('tbody');
    const row = ['First', 'Last', 'Status', 'Points'];
    tbl.appendChild(tbdy);
    output.appendChild(tbl);
     
    function rowAdder(row) {
      console.log(row);
      const tr = document.createElement('tr');
      row.forEach(function (cell) {
        console.log(cell);
        let td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      })
      tbdy.appendChild(tr);
    }
     
    function getData() {
      tbdy.innerHTML = "";
      rowAdder(row);
      fetch(url).then(function (res) {
        return res.json()
      }).then(function (data) {
        console.log(data.feed.entry);
        data.feed.entry.forEach(function (val) {
          //console.log(val);
          let temp = [];
          for (const key in val) {
            //console.log(key);
            if (key.substring(0, 3) == 'gsx') {
              //console.log(val[key]['$t']);
              temp.push(val[key]['$t']);
            }
          }
          rowAdder(temp);
        })
      })
    }