let cabTypes=["micro","mini","prime"];
console.log(cabTypes);
for(let i=0;i<cabTypes.length;i++){
    let type=cabTypes[i];
    console.log(type);
}
console.log("No of cabtypes",cabTypes.length);
console.log("For each loop");
for(let type of cabTypes){
    console.log(type);
}
console.log("contains " ,cabTypes.includes("micro"));