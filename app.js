
function domainGenerator(){

 let pronoun = ['the','our', "my"];
 let adj = ['great', 'big',"sara" ];
 let noun = ['jogger','racoon', "domain"];
 let dom= [".com", ".net", ".sc"]
 let domain="";

for (let i=0 ;i<pronoun.length; i++ ){
    for (let f=0 ;f<adj.length; f++){
        for (let g=0 ; g<noun.length; g++ ){
            for (let h=0 ; h<dom.length; h++){
                let newDomain= pronoun[i] + adj[f] + noun[g] + dom[h];
                console.log(newDomain);
            }
        }
    }
}
}
domainGenerator();



