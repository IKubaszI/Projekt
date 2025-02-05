const express = require('express');
const app = express();
const config = require('./config.js');
//const baze = require('./baze.js');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/' , (request, response) =>{
    response.send('Technologie webowe w aplikacjach Internetu rzeczy Dzilammmmsa');
});

let users = [ 
    
    {"name": " Jakub", "email": "taktoemail@.com", "password": "12345678" },
    {"name": " Szymon", "email": "taktoemail@.com", "password": "12345678" },
    {"name": " NomySZ", "email": "taktoemail@.com", "password": "12345678" },
    {"name": " Bukaj", "email": "taktoemail@.com", "password": "12345678" },
]

let chart = {
   
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
    }, {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
    }, {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
    }, {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
    }, {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
    }]
};


app.get('/api/users', (request, response) =>{
    response.send(users);
});

app.get('/api/user/:id' , (request, response) =>{
    const id = request.params.id;
    response.send(users[id]);
});


app.get('/api/continents' , (request, response) =>{
    response.render(__dirname + '/index.html', {
        chart: JSON.stringify(chart)
    })
});

app.listen(config.port, function() {
    console.log(`Server is running at port ${config.port}`)
})
