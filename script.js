// Inputs
const nail = document.getElementById("nailDamage");
const boss = document.getElementById("bossName");
const hits = document.querySelector("[data-hit-amount]");

// Arrays
const nailDamage = [
  { name: "Old Nail", damage: 5 },
  { name: "Sharpened Nail", damage: 9 },
  { name: "Channelled Nail", damage: 13 },
  { name: "Coiled Nail", damage: 17 },
  { name: "Pure Nail", damage: 21 },
];
const bossList = [
  { name: "God Tamer", health: 600 },
  { name: "God Tamer Beast", health: 450 },
];

function appendNail() {
  let nLen = nailDamage.length;
  for (let i = 0; i < nLen; i++) {
    let option = document.createElement("option");
    option.text = nailDamage[i].name + " | " + nailDamage[i].damage;
    option.value = nailDamage[i].damage;
    nail.appendChild(option);
  }
}
appendNail();

function appendBoss() {
  let nLen = bossList.length;
  for (let i = 0; i < nLen; i++) {
    let option = document.createElement("option");
    option.text = bossList[i].name + " | " + bossList[i].health;
    option.value = bossList[i].health;
    boss.appendChild(option);
  }
}
appendBoss();

function removeHits() {
  const element = document.getElementsByTagName("span")[0];
  element.parentElement.removeChild(element);
}

function displayHits() {
  const nailValue = parseFloat(document.forms[0].nailDamage.value);
  const bossValue = parseFloat(document.forms[1].bossName.value);
  const hitValue = Math.ceil(bossValue / nailValue);

  let span = document.createElement("span");
  span.innerText = ` ${hitValue}`;
  span.id = "2";
  hits.appendChild(span);
}
displayHits();

function updateHits() {
  let elementExists = document.getElementById("2");
  if (typeof elementExists != "undefined" && elementExists != null) {
    removeHits();
    displayHits();
  }
}

document.getElementById("nailDamage").addEventListener("change", dynamicHits);
document.getElementById("bossName").addEventListener("change", dynamicHits);

function dynamicHits() {
  // Add when either nail or damage changes?
  updateHits();
}
