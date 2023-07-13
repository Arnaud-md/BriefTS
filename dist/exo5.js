"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo5 = void 0;
const exo5 = () => {
    console.log('******Fonctions utilisées*********');
    function getAllDiceCombinations(dices) {
        const toCombine = new Array(dices.length).fill("").map((_, i) => i);
        let combinations = [];
        let temp = [];
        let slent = Math.pow(2, toCombine.length) - 1;
        for (let i = 0; i < slent; i++) {
            temp = [];
            for (var j = 0; j < toCombine.length; j++) {
                if (i & Math.pow(2, j)) {
                    temp.push(toCombine[j]);
                }
            }
            if (temp.length > 0) {
                combinations.push(temp);
            }
        }
        return combinations.map((combi) => {
            const completion = toCombine.filter((index) => combi.indexOf(index) === -1);
            const diceCombi = combi.map((e) => dices[e]);
            const diceCompletion = completion.map((e) => dices[e]);
            return [diceCombi, diceCompletion];
        });
    }
    console.log('******Initialisation du tableau*********');
    // 1 = bouclier vert
    // 2 = épées grises
    // 3 = Héro violet
    // 4 = traitre rouge
    // 5 = anneau jaune
    // 6 = mage bleu
    // 7 = loup noir bleu
    const dices = [1, 2, 2, 2, 3, 4, 6, 7];
    console.log(dices);
    //console.log(getAllDiceCombinations(dices));
    function getSomme(dices) {
        return dices.reduce((acc, identifiantDe) => {
            let toAdd = 0;
            if (identifiantDe === 1) {
                toAdd = 1;
            }
            if (identifiantDe === 2) {
                toAdd = 2;
            }
            if (identifiantDe === 3) {
                toAdd = 3;
            }
            if (identifiantDe === 4) {
                toAdd = 1;
            }
            if (identifiantDe === 5) {
                toAdd = -1;
            }
            if (identifiantDe === 6) {
                toAdd = 0;
            }
            if (identifiantDe === 7) {
                toAdd = 0;
            }
            return acc + toAdd;
        }, 0);
    }
    function tabHeroes(tab) {
        let heroes;
        heroes = tab.filter((val, j) => {
            return val == 3;
        });
        return heroes;
    }
    function tabTreacherous(tab) {
        let treacherous;
        treacherous = tab.filter((val, j) => {
            return val == 4;
        });
        return treacherous;
    }
    function tabMagi(tab) {
        let magi;
        magi = tab.filter((val, j) => {
            return val == 6;
        });
        return magi;
    }
    function tabSword(tab) {
        let sword;
        sword = tab.filter((val, j) => {
            return val == 2;
        });
        return sword;
    }
    function tabShield(tab) {
        let shield;
        shield = tab.filter((val, j) => {
            return val == 1;
        });
        return shield;
    }
    function tabRing(tab) {
        let ring;
        ring = tab.filter((val, j) => {
            return val == 5;
        });
        return ring;
    }
    function tabWolf(tab) {
        let wolf;
        wolf = tab.filter((val, j) => {
            return val == 7;
        });
        return wolf;
    }
    //console.log(tabHeroes(getAllDiceCombinations(dices)[0][0]));
    //console.log(tabHeroes(getAllDiceCombinations(dices)[0][1]));
    //console.log('valeur', getAllDiceCombinations(dices)[0][0], getAllDiceCombinations(dices)[0][1]);
    /*console.log(getAllDiceCombinations(dices).find((val, j) => {
        //console.log('valeur', val[0], val[1])
        console.log(somme[j][0],somme[j][1]);
        if (somme[j][0]===somme[j][1]) {
        return true
        }
        else return false
    }))*/
    function dropHeroes(tab) {
        if (tabHeroes(tab).length >= tabTreacherous(tab).length) {
            return 0 - 3 * tabTreacherous(tab).length;
        }
        else {
            return 0 - 3 * tabHeroes(tab).length;
        }
    }
    function addMagi(tab) {
        let res = 0;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] < 6) {
                res = res + 1;
            }
        }
        return res * tabMagi(tab).length;
    }
    function strongestDice(tab) {
        if (tabHeroes(tab).length > tabTreacherous(tab).length) {
            if (tabMagi(tab).length > 0) {
                return Math.max(tab.length - tabMagi(tab).length - tabWolf(tab).length, 3);
            }
            else {
                return 3;
            }
        }
        else {
            if (tabSword(tab).length > 0) {
                if (tabMagi(tab).length > 0) {
                    return Math.max(tab.length - tabMagi(tab).length - tabWolf(tab).length, 2);
                }
                else {
                    return 2;
                }
            }
            else {
                if (tabRing(tab).length < tab.length) {
                    if (tabMagi(tab).length > 0) {
                        return Math.max(tab.length - tabMagi(tab).length - tabWolf(tab).length, 1);
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    return -1;
                }
            }
        }
    }
    console.log('******Affichage de la solution*********');
    // console.log(getAllDiceCombinations(dices).find((val, j) => {
    //     //console.log('valeur', val[0], val[1])
    //     //console.log(strongestDice(val[0])*2,strongestDice(val[1])*2);
    //     //console.log(somme[j][0]+dropHeroes(val[0])+addMagi(val[0])+strongestDice(val[0])*2,somme[j][1]+dropHeroes(val[1])+addMagi(val[1]));
    //     //console.log(somme[j][0]+dropHeroes(val[0])+addMagi(val[0]),somme[j][1]+dropHeroes(val[1])+addMagi(val[1])+strongestDice(val[1])*2);
    //     if (tabWolf(val[0]).length===1) {
    //             return somme[j][0]+dropHeroes(val[0])+addMagi(val[0])+strongestDice(val[0])*2===somme[j][1]+dropHeroes(val[1])+addMagi(val[1]);
    //     }
    //     else if (tabWolf(val[1]).length===1){
    //             return somme[j][0]+dropHeroes(val[0])+addMagi(val[0])===somme[j][1]+dropHeroes(val[1])+addMagi(val[1])+strongestDice(val[1])*2;
    //     }
    //     else {
    //             return somme[j][0]+dropHeroes(val[0])+addMagi(val[0])===somme[j][1]+dropHeroes(val[1])+addMagi(val[1]);
    //     }
    // }))
    function addWolf(dices) {
        return tabWolf(dices).length === 1 ? strongestDice(dices) : 0;
    }
    function getScore(dices) {
        return getSomme(dices) + addMagi(dices) + dropHeroes(dices) + addWolf(dices);
    }
    function getScores(combinaison) {
        const scoreEquipe1 = getScore(combinaison[0]);
        const scoreEquipe2 = getScore(combinaison[1]);
        return [scoreEquipe1, scoreEquipe2];
    }
    function getSolution(dices) {
        return getAllDiceCombinations(dices).find((combinaison, j) => {
            const [scoreEquipe1, scoreEquipe2] = getScores(combinaison);
            return scoreEquipe1 === scoreEquipe2;
        });
    }
    console.log('la solution a [jaune, vert, jaune, vert] est ', strongestDice([1, 2, 3, 4, 6, 7]), getSolution([3, 1, 1, 1, 4, 6, 6, 7]));
};
exports.exo5 = exo5;
