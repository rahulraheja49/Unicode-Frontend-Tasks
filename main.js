// Getting the information

axios({
  "method":"GET",
  "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
  "headers":{
  "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
  "x-rapidapi-key":"8cbb819b89msh48a87e33cc5e403p15762bjsn98463b5d1210"
  }
  })
  .then((response)=>{
    console.log(response);
    var list = response.data.countries_stat;
    showOutput(list);
  })
  .catch((error)=>{
    console.log(error);
  })




// For output

function showOutput(list){
    for(var i=0; i<10; i++){
        document.getElementById('table').innerHTML += `
            <tr>
            <td>${list[i].country_name}</td>
            <td>${list[i].cases}</td>
            <td>${list[i].deaths}</td>
            <td>${list[i].total_recovered}</td>
            <td>${list[i].active_cases}</td>
            </tr>`
    };
}

