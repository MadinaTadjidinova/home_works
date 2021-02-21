let table = document.createElement('table');
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');

th1.innerText = "Place";
th2.innerText = "Name";
th3.innerText = "Wealth";

table.append(tr);
tr.append(th1);
tr.append(th2);
tr.append(th3);
document.body.append(table);

fetch('https://json-80da8-default-rtdb.firebaseio.com/list.json').then(function(response){
        return response.json();
    })
    .then(function(list){
        for (const key in list) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            
            td1.innerText = list[key].id;
            td2.innerText = list[key].name;
            td3.innerText = list[key].wealth;
        
            table.append(tr);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
        }
    });