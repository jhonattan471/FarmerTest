var express = require('express');
var app = express();
var cors = require('cors')

const port = 3000;

class Farmer {
    constructor(id, document, name, address) {
        this.id = id;
        this.document = document;
        this.name = name;
        this.address = address;
    }
}

class Address {
    constructor(street, state, address, country) {
        this.street = street;
        this.state = state;
        this.address = address;
        this.country = country;
    }
}

class Document {
    constructor(documentNumber, documentType) {
        this.documentNumber = documentNumber;
        this.documentType = documentType;
    }
}

/**
 * I want to make a point here, if is needed to model the tables, make the connection to the database, and filter the Farmes in the database, i will be happy to do it, but 
 * the test has these points :
 *  -The source data (Farmers) can be hardcoded. (not in the component but it could be in the backend side)
 *  -The purpose of the exercise is to evaluate your knowledge about Angular, Angular Material, Node.js, Express, and
 *   testing.
 * I dont want to overdo things... so i will skip that part, and if is needed please let me know.
 *  
 */
let farmers = [
    new Farmer(1, new Document('111.222', 'FAKE1'), 'JOÃO DA SILVA', new Address('RUA RUI BARBOSA', 'PARANÁ', 'RUA RUI BARBOSA 124 CASA', 'BRASIL')),
    new Farmer(2, new Document('333.444', 'FAKE2'), 'JOÃO DE OLIVEIRA', new Address('RUA CORONEL DELCIDIO', 'PARANÁ', 'RUA CORONEL DELCIDIO 478 AP1BL2', 'BRASIL')),
    new Farmer(3, new Document('555.666', 'FAKE3'), 'JOÃO COLEHO', new Address('RUA SEREIA', 'PARANÁ', 'RUA SEREIA 122 CASA 1', 'BRASIL')),
    new Farmer(4, new Document('777.888', 'FAKE4'), 'JOÃO SANTOS', new Address('RUA ITAJAI', 'PARANÁ', 'RUA ITAJAI 23 CASA 3', 'BRASIL'))
]

app.use(cors())

app.get('/:searchParam', function (req, res) {
    let param = req.params.searchParam;
    console.log("farmer called with param : " + param);
    let response = farmers.filter((farmer) => {
        if (farmer.document.documentNumber.startsWith(param)) {
            return true;
        }
        return farmer.name.startsWith(param) ? true : false;
    })
    res.send(response);
});

app.listen(port, () => {
    console.log(`FarmerTestBack listening at http://localhost:${port}`)
})