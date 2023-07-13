export const exo4 = () => {
    const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let candidats2emeTour:Array<String> = [];
    let numCandidat:number;
    let numCandidat2:number;
    let numSondage:number;
    let budget:number;
    let prixVoix:number;
    let voixRachetees:number;
    let index:number;
    const nbVotes = 1000;
    let votes = candidats.map(() => {
        return 0;
    })
    let votes2emeTour =[];
    budget=1000;
    prixVoix=10;
    index=0;
    let indicePaic = candidats.findIndex((value, ind) => {
        return value == "paicvaissrelle"
    });
    let indicePeigne = candidats.findIndex((value, ind) => {
        return value == "lepeigne"
    });
    console.log('******** PREMIERE VERSION ********');
    for(let i = 0; i < nbVotes; i++) {
    numCandidat=Math.floor((Math.random() * candidats.length) + 0);
    votes[numCandidat]=votes[numCandidat]+1;
    }
    for(let i = 0; i<candidats.length; i++) {
    console.log('le candidat : ',candidats[i],' a un nombre de vote égal à : ',votes[i]);
    }
    function candMaxVotes(candidats:Array<String>,votes:Array<number>):Array<String> {
        let j:number=0;
        let k:number=0;
        let tab: Array<String>=[];
        for(let i:number = 0; i<candidats.length; i++) {
            if(votes[i]>votes[j]) {
                j=i;
            }
        }
        for(let i:number = 0; i<candidats.length; i++) {
                if (votes[i]===votes[j]) {
                    k=i;
                    tab.push(candidats[k]);
                }
        }
        return tab;
    }
    function votesMaxVotes(votes:Array<number>):Array<number> {
        let j:number=0;
        let k:number=0;
        let tab: Array<number>=[];
        for(let i:number = 1; i<votes.length; i++) {
            if(votes[i]>votes[j]) {
                j=i;
            }
        }
        for(let i:number = 0; i<votes.length; i++) {
                if (votes[i]===votes[j]) {
                    k=i;
                    tab.push(votes[k]);
                }
        }
        return tab;
    }

    let candidats2 = candidats.filter((value) => {
        let j=0;
        for (let i:number=0;i<candMaxVotes(candidats,votes).length;i++) {
            if (value === candMaxVotes(candidats,votes)[i]) {
                j=1;
            }
        }
        return j===0;
    });
    let votes2 = votes.filter((value) => {
        return value !==votesMaxVotes(votes)[0];
    })
    console.log('le (ou les) candidat(s) qui a (ont) le plus de votes est : ');
    for (let i=0;i<candMaxVotes(candidats,votes).length;i++) {
        console.log('candidats : ');
        console.log(candMaxVotes(candidats,votes)[i]);
        console.log('il a : ');
        console.log(votesMaxVotes(votes)[i]);
        console.log(' votes');
    }

    console.log('le (ou les) candidat(s) qui a (ont) le deuxième plus grand nombre de votes est : ');
    for (let i=0;i<candMaxVotes(candidats2,votes2).length;i++) {
        console.log('candidats : ');
        console.log(candMaxVotes(candidats2,votes2)[i]);
    }
 
    if(candMaxVotes(candidats,votes).length>1) {
        console.log('les candidats qui passent au deuxième tour sont : ');
        for (let i=0;i<candMaxVotes(candidats,votes).length;i++) {
            console.log(candMaxVotes(candidats,votes)[i])
        }
    }
    else {
        console.log('les candidats qui passent au deuxième tour sont : ');
        console.log(candMaxVotes(candidats,votes)[0]);
        for (let i=0;i<candMaxVotes(candidats2,votes2).length;i++) {
            console.log(candMaxVotes(candidats2,votes2)[i])
        }
    }
    console.log(' ');
    console.log('******** DEUXIEME VERSION (2e tour et achat de voix) ********');
    console.log('le nombre de voix que paicvaissrelle peut racheter à LePeigne est : ',budget/prixVoix);
    console.log('mais comme LePeigne a : ',votes[indicePeigne],' voix, paicvaissrelle peut racheter : ',votes[indicePeigne]>budget/prixVoix ? budget/prixVoix : votes[indicePeigne],' voix');
    if(votes[indicePeigne]>budget/prixVoix){
        voixRachetees=budget/prixVoix;
    }
    else {
        voixRachetees=votes[indicePeigne];
    }
    console.log('le tableau de votes du premier tour est : ');
    
    
    for(let i = 0; i<candidats.length; i++) {
        if (i!==indicePeigne && i!==indicePaic) {
            console.log('le candidat : ',candidats[i],' a un nombre de vote égal à : ',votes[i]);
        }
        else if (i===indicePeigne) {
            console.log('le candidat : ',candidats[indicePeigne],' a un nombre de vote égal à : ',votes[indicePeigne]-voixRachetees);
            votes[indicePeigne]=votes[indicePeigne]-voixRachetees;
        }
        else if (i===indicePaic) {
            console.log('le candidat : ',candidats[indicePaic],' a un nombre de vote égal à : ',votes[indicePaic]+voixRachetees);
            votes[indicePaic]=votes[indicePaic]+voixRachetees;
        }
    }
    
    votes2 = votes.filter((value) => {
        return value !==votesMaxVotes(votes)[0];
    })
    
    candidats2 = candidats.filter((value) => {
        let j=0;
        for (let i:number=0;i<candMaxVotes(candidats,votes).length;i++) {
            if (value === candMaxVotes(candidats,votes)[i]) {
                j=1;
            }
        }
        return j===0;
    });
    console.log('les candidats qui passent au deuxième tour sont : ');
    if(candMaxVotes(candidats,votes).length>1) {
        
        for (let i=0;i<candMaxVotes(candidats,votes).length;i++) {
            console.log(candMaxVotes(candidats,votes)[i]);
            candidats2emeTour.push(candMaxVotes(candidats,votes)[i]);
            votes2emeTour.push(0);
        }
    }
    else {
        
        console.log(candMaxVotes(candidats,votes)[0]);
        candidats2emeTour.push(candMaxVotes(candidats,votes)[0]);
        votes2emeTour.push(0);
        for (let i=0;i<candMaxVotes(candidats2,votes2).length;i++) {
            console.log(candMaxVotes(candidats2,votes2)[i]);
            candidats2emeTour.push(candMaxVotes(candidats2,votes2)[i]);
            votes2emeTour.push(0);
        }
    }
    for(let i = 0; i < nbVotes-voixRachetees; i++) {
        numCandidat2=Math.floor((Math.random() * candidats2emeTour.length) + 0);
            votes2emeTour[numCandidat2]+=1;
    }
    for (let i=0;i<candidats2emeTour.length;i++) {
        console.log('le candidat ',candidats2emeTour[i],' a un nombre de vote avant davoir acheté des voix au premier tour de : ',votes2emeTour[i]);
    }
    let indPaic2emeTour = candidats2emeTour.findIndex((value) => {
        return value == "paicvaissrelle"
    });

    let indPeigne2emeTour = candidats2emeTour.findIndex((value,ind) => {
        return value === "lepeigne"
    });
    if (candidats2emeTour.includes("paicvaissrelle")) {
        votes2emeTour[indPaic2emeTour]+=voixRachetees;
    }
    for (let i=0;i<candidats2emeTour.length;i++) {
        console.log('le candidat ',candidats2emeTour[i],' a un nombre de vote avant davoir acheté des voix au deuxième tour de : ',votes2emeTour[i]);
        if (candidats2emeTour.includes("paicvaissrelle")&&candidats2emeTour.includes("lepeigne")) {
            votes2emeTour[indPeigne2emeTour]+=voixRachetees-100
            votes2emeTour[indPaic2emeTour]+=100-voixRachetees;
        }
    }

    for (let i=0;i<candidats2emeTour.length;i++) {
        console.log('le candidat : ',candidats2emeTour[i],' a apres avoir acheté des voix au deuxième tour : ',votes2emeTour[i],' votes');
    }
    let candidatsMax2emeTour = candMaxVotes(candidats2emeTour,votes2emeTour);
    console.log('le(s) candidat(s) qui a (ont) gagné est (sont) : ');
    for (let i=0;i<candidatsMax2emeTour.length;i++) {
        console.log('candidat : ',candidatsMax2emeTour[i]);
    }
    console.log(' ');

    console.log('******** TROISIEME VERSION (sondage) ********');
    votes=[21,19,21,3,1,1,1];
    let sommeVotes = votes.reduce((acc,val) => {
        return acc+val;
    },0);
    for(let i = 0; i < nbVotes; i++) {
        numSondage=Math.floor((Math.random() * sommeVotes) + 0);
        numCandidat = 0;
        if(numSondage<votes[0]) {
            numCandidat=0;
        }
        if(numSondage>=votes[0]&&numSondage<votes[0]+votes[1]) {
            numCandidat=1;
        }
        if(numSondage>=votes[0]+votes[1]&&numSondage<votes[0]+votes[1]+votes[2]) {
            numCandidat=2;
        }
        if(numSondage>=votes[0]+votes[1]+votes[2]&&numSondage<votes[0]+votes[1]+votes[2]+votes[3]) {
            numCandidat=3;
        }
        if(numSondage>=votes[0]+votes[1]+votes[2]+votes[3]&&numSondage<votes[0]+votes[1]+votes[2]+votes[3]+votes[4]) {
            numCandidat=4;
        }
        if(numSondage>=votes[0]+votes[1]+votes[2]+votes[3]+votes[4]&&numSondage<votes[0]+votes[1]+votes[2]+votes[3]+votes[4]+votes[5]) {
            numCandidat=5;
        }
        if(numSondage>=votes[0]+votes[1]+votes[2]+votes[3]+votes[4]+votes[5]&&numSondage<sommeVotes) {
            numCandidat=6;
        }
        votes[numCandidat]=votes[numCandidat]+1;
    }
    for(let i = 0; i<candidats.length; i++) {
        console.log('le candidat : ',candidats[i],' a un nombre de vote égal à : ',votes[i]);
    }
    //votes.forEach(vote,iter) {
    const maximumVotes = Math.max(...votes)
    const vainqueurs = votes
        .map((vote, i) => {
            return vote === maximumVotes ? i : null
        })
        .filter( (valeur) => valeur != null)
        .map((indexCandidat) => {
            return candidats[indexCandidat as number]
        })

        // votes.forEach(function(value,i) {
        //     if (value >=votes[0]&&value >=votes[1]&&value >=votes[2]&&value >=votes[3]&&value >=votes[4]&&value >=votes[5]&&value >=votes[6]) {
        //         index = i;
        //     }

        if(vainqueurs.length > 1){
            console.log('plusieurs vainqueurs');
        }
        else {
            console.log('le vainqueur est', vainqueurs[0]);
        }
        
        //if(votes[iter]>max)
        //console.log('le candidat qui a le plus de votes est : ',candidats[i] where i is determined by max(votes[i]))
        //console.log('le candidat qui a le plus de vote est : ',candidats[index]);
}