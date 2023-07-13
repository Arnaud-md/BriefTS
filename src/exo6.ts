export const exo6 = () => {
    function additionSimple(a: number, b: number): number {
        if(a < 1 || a > 9 || b < 1 || b > 9) {
            throw new Error("Les nombres doivent être compris entre 1 et 9");
        }
        return a + b;
    }
    function inversion(nombre:Array<number>) {
        let res:Array<number>=[];
        for(let i=0;i<nombre.length;i++) {
            res.push(nombre[nombre.length-1-i]);
        }
        return res;
    }
    console.log('le tableau inversé de [1 9 4 2 8 6] est : ',inversion([1, 9, 4, 2, 8, 6]));
    function additionGrandsNombres(nombreA: Array<number>, nombreB: Array<number>) {
        let retenue = [0];
        let C: Array<number> = [];
        let A = inversion(nombreA);
        let B = inversion(nombreB);
        for (let i=0;i<Math.max(nombreA.length,nombreB.length);i++) {
            
            console.log('laddition simple des chiffres de A et B : ',additionSimple(A[i],B[i]));
            C[i]=additionSimple(A[i],B[i])+retenue[i];
            if (C[i]>9) {
                retenue[i+1]=1;
                C[i]=C[i]%10;
            }
            else {
                retenue[i+1]=0;
            }

        }
        if (nombreA.length > nombreB.length) {
            for(let i=nombreB.length;i<nombreA.length;i++) {
                C[i]=A[i]+retenue[i];
                retenue[i+1]=0;
            }
        }
        if (nombreB.length > nombreA.length) {
            for(let i=nombreA.length;i<nombreB.length;i++) {
                C[i]=B[i]+retenue[i];
                retenue[i+1]=0;
            }
        }
        console.log('le resultat est : ', inversion(C))
        return inversion(C);
    }
    console.log('addition de 1836 et 14795',additionGrandsNombres([1,8,3,6],[1, 4,7,9,5]));
}