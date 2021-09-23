
alert(14!=='15')
var chaine=''

function afficher(valeur){
    /* var text = document.getElementById("dtxt1").innerText=valeur;
     alert("Vous avez tapé: " + valeur)*/
     chaine= chaine+valeur
        document.getElementById("dtxt1").innerText=chaine;
        document.getElementById("dtxt2").innerText=eval(chaine);
     
    
}
 function operation(signe){
     
    if("/*=-+.".indexOf(chaine.charAt(chaine.length-1))>=0){
        var newStr = chaine.slice(0, -1);
        chaine=newStr+signe
        document.getElementById("dtxt1").innerText=chaine;
     }
     else{
        chaine= chaine+signe
        document.getElementById("dtxt1").innerText=chaine;
        document.getElementById("dtxt2").innerText=eval(chaine);

     }

   
 }
  
function choix(signe){

    chaine=chaine+signe
    var newStr = chaine.slice(0, -2);
    chaine=newStr+signe
    document.getElementById("dtxt1").innerHTML = chaine; 



    

    /*var newStr = chaine.slice(0, -1);
    /*var chaine1=chaine
    var chaine2=chaine1+signe1
    if(chaine1!=chaine2)
    document.getElementById("dtxt1").innerText=chaine;*/
    /*chaine2 = chaine.substring(-1,-2) +chaine.substring(0);*/
    /*document.getElementById("dtxt1").innerText=newStr+signe1;*/

}

function allclear(){
    /*alert('vous vous appreter à tout supprimer')*/
    chaine=''
     document.getElementById("dtxt1").innerText=chaine;
     document.getElementById("dtxt2").innerText='0';

}
function delet(){
    /*alert('vous vous appreter à supprimer le dernier élement')*/
 
        /*var chaine = chaine.slice(0, -1);*/
        chaine=document.getElementById("dtxt1").innerHTML = chaine.slice(0, -1); 
    
}
function operationegal(){
    /*chaine= eval('chaine')*/
      document.getElementById("dtxt2").innerText=eval(chaine);

    
}

function racine(){
     n=(eval(chaine))
     erreur = 0.00000001;
     inf = 0;  
     sup = n;  
     moy = (inf + sup)/2  
     
    while ( ( moy * moy >= n + erreur) || (moy * moy <= n - erreur ) )  
    {
        if (moy *moy >= n) 
            sup = moy; 
        else
            inf = moy; 
        moy = (inf + sup)/2;  
    }
    document.getElementById("dtxt2").innerText= moy  ;
  
    
}
function effectuer(){
    document.getElementById("dtxt2").innerText= racine(n)
    /*document.getElementById("dtxt2").innerText= racine((eval(chaine)));*/
}
