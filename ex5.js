const readlineSync = require ("readline-sync");

let data = {
  seriename :"",
  prodyear :"",
  castmemb :[]
}
let n=1;

let askTvSerie = (data)=>{
  data.seriename= readlineSync.question("What's the name of your favorite serie?");
  data.prodyear = readlineSync.question("What's the production year ?");

  for (let i = 0; parseInt(n) !==0; i++) {
    n=readlineSync.question("Name of the cast members ? (press 0 to exit)");
    if (parseInt(n) !==0){
      data.castmemb[i]=n;
    }
  }
}
askTvSerie(data);

console.log(data);
