"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo3 = void 0;
const exo3 = () => {
    const stock = 800;
    const consommation = 0.25;
    const dureeM1 = 1000;
    let nbMoutons;
    let dureeStock;
    nbMoutons = 2;
    dureeStock = stock / (nbMoutons * consommation);
    if (dureeStock < dureeM1) {
        console.log("le stock avec deux moutons et un stock de 800kg va durer ", dureeStock, " jours");
    }
    else {
        nbMoutons = 1;
        dureeStock = stock / (nbMoutons * consommation) - dureeM1;
        console.log("le stock avec deux moutons et un stock de 800kg va durer ", dureeStock, " jours");
    }
    const stock2 = 20;
    dureeStock = stock2 / (nbMoutons * consommation);
    if (dureeStock < dureeM1) {
        console.log("le stock avec deux moutons et un stock de 20kg va durer ", dureeStock, " jours");
    }
    else {
        nbMoutons = 1;
        dureeStock = stock2 / (nbMoutons * consommation) - dureeM1;
        console.log("le stock avec deux moutons et un stock de 20kg va durer ", dureeStock, " jours");
    }
    nbMoutons = 5;
    dureeStock = stock / (nbMoutons * consommation);
    if (dureeStock < dureeM1) {
        console.log("le stock avec cinq moutons et un stock de 800kg va durer ", dureeStock, " jours");
    }
    else {
        nbMoutons = 4;
        dureeStock = stock2 / (nbMoutons * consommation) - dureeM1;
        console.log("le stock avec cinq moutons et un stock de 800kg va durer ", dureeStock, " jours");
    }
    dureeStock = stock2 / (nbMoutons * consommation);
    if (dureeStock < dureeM1) {
        console.log("le stock avec cinq moutons et un stock de 20kg va durer ", dureeStock, " jours");
    }
    else {
        nbMoutons = 4;
        dureeStock = stock2 / (nbMoutons * consommation) - dureeM1;
        console.log("le stock avec cinq moutons et un stock de 20kg va durer ", dureeStock, " jours");
    }
};
exports.exo3 = exo3;
