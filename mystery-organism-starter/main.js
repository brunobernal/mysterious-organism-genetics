// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number,array) => {
  return {
    specieNum: number,
    dna: array,
    mutate() {
      let randomIndex = Math.floor(Math.random() * 15);
      let dnaBases = ['A', 'T', 'C', 'G']
      switch (array[randomIndex]) {
        case 'A':
          var dnaBasesNew = dnaBases.filter(n => {
            return n !== 'A';
          });
          var rand = Math.floor(Math.random()*3);
          array[randomIndex] = dnaBasesNew[rand];
          break;
        case 'T':
          var dnaBasesNew = dnaBases.filter(n => {
            return n !== 'T';
          });
          var rand = Math.floor(Math.random()*3);
          array[randomIndex] = dnaBasesNew[rand];
          break;
        case 'C':
          var dnaBasesNew = dnaBases.filter(n => {
            return n !== 'C';
          });
          var rand = Math.floor(Math.random()*3);
          array[randomIndex] = dnaBasesNew[rand];
          break;
        case 'G':
          var dnaBasesNew = dnaBases.filter(n => {
            return n !== 'G';
          });
          var rand = Math.floor(Math.random()*3);
          array[randomIndex] = dnaBasesNew[rand];
        }
      return this.dna;
    },
    compareDna(pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === pAequor.dna[i]){
          counter += 1;
        }
      }
        let percentage = Math.floor(counter/15*100);
        console.log(`specimen #${this.specieNum} and specimen #${pAequor.specieNum} have ${percentage}% DNA in common.`); 
      },
      willLikelySurvive() {
        let gcount = 0;
        let ccount = 0;
        for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === 'G'){
            gcount++;
          } else if (this.dna[i] === 'C'){
            ccount++;
          }
        }
        let gpercent = gcount/15;
        let cpercent = ccount/15;
        if (gpercent > 0.6 || cpercent > 0.6){
          return true;
        } else {
          return false;
        }

      }
    
  };
};

/*
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)

*/







