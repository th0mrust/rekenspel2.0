const wrapper = document.getElementById("wrapper");
const mijnOpgave = document.getElementById("mijnOpgave");
const mijnAntwoord = document.getElementById("mijnAntwoord");
const mijnEvaluatie = document.getElementById("mijnEvaluatie");

mijnEvaluatie.style.display = "none";

myAudio = new Audio('lofihiphop.mp3');
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.play();
myAudio.volume = 0.3;


let sommen = [];
let teller = 0;
let antwoord1;

var html = "<table border='1|1'>";

function makeNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

function makeSum() {
  let mySum = {};
  mySum.numA = makeNumber();
  mySum.numB = makeNumber();

  mySum.antwoord = mySum.numA * mySum.numB;

  return mySum;
}
console.log(sommen);


for (let i = 0; i < 10; i++){
  sommen.push(makeSum());
}

mijnOpgave.innerHTML = sommen[teller].numA + " x " + sommen[teller].numB;

function keyHandler(evt) {
  if (evt.keyCode == 13) {
    sommen[teller].mijnAntwoord = mijnAntwoord.value;
    mijnAntwoord.value = '';

    if (eval(sommen[teller].antwoord) == sommen[teller].mijnAntwoord) {

      teller++;
    }  else {
      teller++;
    }
    if (teller >= sommen.length) {
      mijnAntwoord.removeEventListener("keydown", keyHandler);
      result();
    } else {
      mijnOpgave.innerHTML = sommen[teller].numA + " x " + sommen[teller].numB;
      console.log(sommen);
    }
  }
}


function result() {
  mijnEvaluatie.style.display = "";
  mijnOpgave.style.display = "none";
  mijnAntwoord.style.display = "none"
    for (var i = 0; i < sommen.length; i++) {
        html+="<tr>";

        html+="<td>Goede Antwoord: "+sommen[i].antwoord+"</td>";
        html+="<td> Jouw Antwoord: "+sommen[i].mijnAntwoord+"</td>";

        html+="</tr>";

    }
    html+="</table>";
    document.getElementById("mijnEvaluatie").innerHTML = html;
  }

makeSum();
mijnAntwoord.addEventListener("keydown", keyHandler, false);
