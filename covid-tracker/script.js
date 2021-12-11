let covid_data;

get_countries();
get_statistics();
set_values();

async function get_countries() {
  const response = await fetch("https://covid-193.p.rapidapi.com/countries", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "7d27eb1b67msh2aeb4a15040a2e2p116b03jsn33d9236ad699",
    },
  });
  const result = await response.json();
  console.log(result.response);
  for (let i = 0; i < result.response.length; i++) {
    const country = document.createElement("option");
    country.innerHTML = result.response[i];
    document.getElementById("country-select").appendChild(country);
  }
}

async function get_statistics() {
  const response = await fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "7d27eb1b67msh2aeb4a15040a2e2p116b03jsn33d9236ad699",
    },
  });
  const result = await response.json();
  console.log(result.response);
  covid_data = result.response;
}

function set_values() {
  document.getElementById("country-select").onchange = function () {
    document.getElementById("output-area").style.visibility = "visible";
    const country = document.getElementById("country-select").value;
    const curr = covid_data.filter((element) => element.country == country)[0];
    console.log(curr);
    const newcases = document.getElementById("new-cases");
    const totalcases = document.getElementById("total-cases");
    const activecases = document.getElementById("active-cases");
    const recoveredcases = document.getElementById("recovered-cases");
    const newdeaths = document.getElementById("new-deaths");
    const totaldeaths = document.getElementById("total-deaths");
    const totaltests = document.getElementById("total-tests");
    const lastupdated = document.getElementById("last-updated");

    curr.cases.new
      ? (newcases.innerHTML = "New: " + curr.cases.new)
      : (newcases.innerHTML = "New: <em>unavailable</em>");
    curr.cases.total
      ? (totalcases.innerHTML = "Total: " + curr.cases.total)
      : (totalcases.innerHTML = "Total: <em>unavailable</em>");
    curr.cases.active
      ? (activecases.innerHTML = "Active: " + curr.cases.active)
      : (activecases.innerHTML = "Active: <em>unavailable</em>");
    curr.cases.recovered
      ? (recoveredcases.innerHTML = "Recovered: " + curr.cases.recovered)
      : (recoveredcases.innerHTML = "Recovered: <em>unavailable</em>");
    curr.deaths.new
      ? (newdeaths.innerHTML = "New: " + curr.deaths.new)
      : (newdeaths.innerHTML = "New: <em>unavailable</em>");
    curr.deaths.total
      ? (totaldeaths.innerHTML = "Total: " + curr.deaths.total)
      : (totaldeaths.innerHTML = "Total deaths: <em>unavailable</em>");
    curr.tests.total
      ? (totaltests.innerHTML = "Total: " + curr.tests.total)
      : (totaltests.innerHTML = "Total: <em>unavailable</em>");
    curr.day
      ? (lastupdated.innerHTML = "Last updated: " + curr.day)
      : (lastupdated.innerHTML = "Last updated: <em>unavailable</em>");
  };
}
