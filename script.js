var count = 0;
function Attac() {
    count =0
    let Monsterhealth = document.getElementById("bordercolor");
    let Yourhealth = document.getElementById("Yourbordercolor");
    const myArray = Monsterhealth.style.width.split("%");
    let maxMonster = myArray[0];
  const myArray2= Yourhealth.style.width.split("%");
    let maxYour = myArray2[0];
    maxMonster++;
    maxYour++;
   let MonsterDescrease = Math.floor(Math.random() *(maxMonster));
    let HealtDescrease = Math.floor(Math.random() * (maxYour));
    
    
    Monsterhealth.style.width=MonsterDescrease + "%";
    Yourhealth.style.width=HealtDescrease + "%";
}
function Special() {
    count =0
       let Monsterhealth = document.getElementById("bordercolor");
    let Yourhealth = document.getElementById("Yourbordercolor");
    const myArray = Monsterhealth.style.width.split("%");
    let maxMonster = myArray[0];
  const myArray2= Yourhealth.style.width.split("%");
    let maxYour = myArray2[0];
    if (maxYour < 20) {
        
        if (maxMonster > maxYour) {
            maxYour--;
        let MonsterDescrease = Math.floor(Math.random() * (maxYour));
            Monsterhealth.style.width = MonsterDescrease + "%";
            
        }
        else {
            maxMonster++;
            let MonsterDescrease = Math.floor(Math.random() * (maxMonster));
            Monsterhealth.style.width = MonsterDescrease + "%";
        }
         }

}
function Heal() {
    if (count < 3) {
        count++;
        let Yourhealth = document.getElementById("Yourbordercolor");
        const myArray2 = Yourhealth.style.width.split("%");
        let maxYour = myArray2[0];
        let maxHeal = 100 - parseInt(maxYour);
        maxHeal++;
        console.log(maxHeal)
        let HealtDescrease = Math.floor(Math.random() * (maxHeal));
        let healthFinal = parseInt(maxYour) +parseInt(HealtDescrease)
        console.log(healthFinal)
        Yourhealth.style.width = healthFinal + "%";
    }
}
function Start() {
    count = 0;
    let Monsterhealth = document.getElementById("bordercolor");
    let Yourhealth = document.getElementById("Yourbordercolor");
     Monsterhealth.style.width= "100%";
    Yourhealth.style.width="100%";
}