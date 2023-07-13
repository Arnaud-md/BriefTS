export const exo2 = () => {
    /*une méthode différente qui crée une variable i et un tableau
    let i : number;
    let tableau = new Array() as Array<number>;*/
    let tableau:number[]=[];
    for (let i = 0; i < 10; i++) {
        tableau[i] = i+1;
      }
    console.log ("Longueur du tableau : ", tableau.length);
    console.log ("Premier élément du tableau : ", tableau[0]);
    console.log ("Dernier élément du tableau : ", tableau[9]);
    console.log ("Quatrième élément du tableau : ", tableau[3]);
    let tableauBis:number[]=[];
    for (let i = 0; i < 10; i++) {
        tableauBis[i] = tableau[i]*2;
        console.log ("Element du tableau : à l'indice ", i, " est : ", tableauBis[i]);
      }

}