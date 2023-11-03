// Variables des différents messages à afficher
const messageErreurs = document.getElementById("messageErreurs");
const messageDelta = document.getElementById("messageDelta");
const messageRacines = document.getElementById("messageRacines");
const messageValeurRacines = document.getElementById("messageValeurRacines");

// Variables des 2 boutons
const boutonResolution = document.getElementById("boutonResolution");
const boutonEffacer = document.getElementById("boutonEffacer");

// Variables des 3 inputs
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const inputC = document.getElementById("c");

// Bouton de résolution
boutonResolution.addEventListener("click", (e) => {
  e.preventDefault();
  messageErreurs.style.color = "red";

  // Les 3 variables prennent les valeurs données par l'utilisateur
  let a = inputA.value;
  let b = inputB.value;
  let c = inputC.value;

  // Par défaut, les calculs doivent être effectués
  let valide = true;

  // Si une des valeurs est absente ou inutilisable, renvoie un message d'erreur
  try {
    if (a == "" || b == "" || c == "")
      throw "Une des valeurs n'est pas renseignée";
    if (isNaN(a) || isNaN(b) || isNaN(c))
      throw "Les valeurs ne peuvent doivent être des numériques";
    if (a == 0) throw "La valeur du coefficient a ne peut être nulle";
  } catch (error) {
    messageErreurs.innerHTML = error;

    // Si une erreur est détectée, les calculs ne seront pas effectués
    valide = false;
  }

  // Si aucune erreur n'a été détectée, les calculs sont effectués comme prévu
  if (valide == true) {
    messageErreurs.style.color = "lime";
    messageErreurs.innerHTML = "Vos saisies sont valides";

    // Calcul de delta
    let delta = b * b - 4 * a * c;
    messageDelta.innerHTML = `La valeur de delta est : ${delta}`;

    // Calculs des racines de l'équation en fonction de delta
    if (delta == 0) {
      messageRacines.innerHTML = `La racine de l'équation ${a}X² + ${b}X + 3 = 0 est :`;
      var racine0 = -b / (2 * a);
      messageValeurRacines.innerHTML = `X = ${racine0}`;
    } else if (delta < 0) {
      messageRacines.innerHTML = "Pas de racine réelle";
    } else {
      messageRacines.innerHTML = `Les racines de l'équation ${a}X² + ${b}X + 3 = 0 sont :`;
      racine0 = (-b - Math.sqrt(delta)) / (2 * a);
      let racine1 = (-b + Math.sqrt(delta)) / (2 * a);
      messageValeurRacines.innerHTML = `X1 = ${racine0} et X2 = ${racine1}`;
    }
  }
});

// Bouton effacer
boutonEffacer.addEventListener("click", (e) => {
  e.preventDefault();

  // Reset des valeurs dans les inputs
  inputA.value = "";
  inputB.value = "";
  inputC.value = "";

  // Reset des messages
  messageErreurs.innerHTML = "";
  messageDelta.innerHTML = "";
  messageRacines.innerHTML = "";
  messageValeurRacines.innerHTML = "";
});
