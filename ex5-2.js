const readlineSync = require ("readline-sync");

let data = {
  seriename :"",
  prodyear :"",
  castmemb :["John","Philip","Peter","Pastèqueclub"]
}

let askTvSerie = (data)=>{
  data.seriename= readlineSync.question("What's the name of your favorite serie?");
  data.prodyear = readlineSync.question("What's the production year ?");
    }
    function randomizeCast (castmemb) {
  var i = 0
    , j = 0
    , temp = null;

  for (i =data.castmemb.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = data.castmemb[i];
    data.castmemb[i] = data.castmemb[j];
    data.castmemb[j] = temp;
    return data.castmemb;
  }
}


askTvSerie(data);
console.log(randomizeCast());
