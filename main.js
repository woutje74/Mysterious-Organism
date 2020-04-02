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

//console.log('Mock up strand: ',mockUpStrand());

const pAequorFactor = (specimenNum, dna) => {
  return {
  specimenNum,
  dna,
  mutate(){
    let i = (Math.floor(Math.random() * 15) - 1); //create a random indexnumber to determine the index for the base that should mutate
    let x = returnRandBase(); // creates a random DNA base for comparisson and to be passed into the indexnumber i of dna if the condition is met
    if (dna[i] !== x){
      return dna.splice(i, 1, x);
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
    //const cOrG = this.dna.filter(el => el === "C" || el === "G");
    // return cOrG.length / this.dna.length >= 0.6;
    let countC = 0;
    let countG = 0;
    for (let a = 0; a < this.dna.length ; a++){
      if (this.dna[a] === 'C'){
        countC++;
      } else if (this.dna[a] === 'G'){
        countG++;
      };
    };
    const percC = Math.round((countC / 15) * 100);
    const percG = Math.round((countG / 15 ) * 100);
    //console.log('Percentage C: ', percC, ' Percentage G: ', percG);
    if (percC > 60 || percG > 60){
      return true;
    } else {
      return false;
    };
  },
  }
};

//const pAequor = pAequorFactor(1, mockUpStrand()); // creates an object instance of pAequor
//pAequor.mutate(); // mutates the created pAequor sample

//console.log('Will pAequor survive?: ' + pAequor.willLikelySurvive()); // uses the willLikelySurvive method to indicate whether the specimen has 60% C or G bases and can therefore survive

// the following lines of code will create an array of thirty specimens
const specimens = [];
let idCount = 1;

//function createSpecimen(){
  while (specimens.length < 30){
    let pAequor = pAequorFactor(idCount, mockUpStrand());
    if (pAequor.willLikelySurvive()){
    specimens.push(pAequor);
    }
    idCount++;
  }  
 
//createSpecimen();

console.log(specimens);

//uses the created object pAequor and compares it with a DNA specimen from the specimens array. The parameter passed in is the index number for the specimens array
//pAequor.compareDNA(3);