// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
returnRandBase();

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//factory function to create objects of a specimen
const pAequorFactor = (specimenNum, dna) => {
  return {
  specimenNum,
  dna,
  mutate(){
    let i = (Math.floor(Math.random() * this.dna.length)); //create a random indexnumber to determine the index for the base that should mutate
    let x = returnRandBase(); // creates a random DNA base for comparisson and to be passed into the indexnumber i of dna if the condition is met
    if (this.dna[i] !== x){
      return this.dna.splice(i, 1, x);
      }
    },
  compareDNA(spec){ //method to compare the object instance with a specimen from the specimens array
  let count = 0;
    for (let j=0 ; j < dna.length ; j++)
    if (this.dna[j] === specimens[spec][j]){
      count++;
      };    
    const perc = Math.round((count / 15) * 100);
    console.log('Specimen 1: ' + this.dna);
    console.log('Specimen 2 (database index ' + spec + '): ' + specimens[spec]);
    console.log('Specimen 1 and Specimen 2 have ' + perc +'% in common.');
    },
  willLikelySurvive(){
    let cCorG = 0;
    for (let a = 0; a < this.dna.length ; a++){
      if (this.dna[a] === 'C' || this.dna[a] === 'G'){
        cCorG++;
      };
    };
    return (Math.round((cCorG / 15) * 100)) >= 60;
  },
  }
};

// the following lines of code will create an array of thirty specimens that can survive
const specimens = [];
let idCount = 1;

function createSpecimen(){
  while (specimens.length < 30){
    let pAequor = pAequorFactor(idCount, mockUpStrand());
    if (pAequor.willLikelySurvive()){
    specimens.push(pAequor);
    }
    idCount++;
  }  
}; 

createSpecimen();

console.log(specimens);

