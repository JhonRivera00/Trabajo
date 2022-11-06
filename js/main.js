function filtros(a){
    var autos= document.getElementsByClassName("autos");
    for(let i=0;i<autos.length;i++){
        autos[i].style.display="none";
    }

    switch (a){
        case 'ford':
            ford=document.getElementsByClassName('ford');
        for(i=0;i<ford.length;i++){
            ford[i].style.display="block";
        }
        break;
        default:
            for(let i=0;i<autos.length;i++){
                autos[i].style.display="none";
            }
        break;
    }
    console.log(autos);
    console.log(a);
}
