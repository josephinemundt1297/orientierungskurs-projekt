// Funktion, um den Trank als aufgenommen zu markieren, die Information
// wird bei Pfad-4-Trank.html gesetzt und damit gespeichert
function trankAufnehmen() {
  localStorage.setItem("trankAufgenommen", "true");
  // Zeige das Trank-Icon an
  document.getElementById("trank-icon-container").style.display = "block";
}

// Funktion, um den Trank-Button ein-/auszublenden
function aktualisiereTrankOption() {
  const trankOption = document.getElementById("trankOption");
  if (!trankOption) return; // Falls das Element nicht existiert, abbrechen
  // mit dem Zeichen "!" wird gesagt das der Trank nicht aufgenommen wurde
  // mit der Funktion return wird die Funktion abgebrochen und gespeichert

  let trankAufgenommen = localStorage.getItem("trankAufgenommen") === "true";
  if (trankAufgenommen) {
    trankOption.style.display = "inline";
    // inline zeigt den Button an
    // ich verwende inline weil ich den button nicht skallieren möchte
    const iconContainer = document.getElementById("trank-icon-container");
    if (iconContainer) {
      iconContainer.style.display = "block";
    }
  } else {
    trankOption.style.display = "none";
    // none versteckt den Button
  }

  // Unterschied zwischen inline und block:
  // block nimmt die ganze Breite ein und macht einen Zeilenumbruch
  // es können noch die Maße width und height gesetzt werden

  // inline nimmt nur so viel Platz ein wie nötig und startet in der
  // gleichen Zeile weiter. Die Maße width und height können nicht gesetzt werden
}

// Funktion, um das Spiel zurückzusetzen
function starten() {
  localStorage.removeItem("trankAufgenommen");
  location.href = "./HTML-Seiten/Pfad-1.html";
}

function neuStarten() {
  localStorage.removeItem("trankAufgenommen");
  location.href = "../index.html";
}

// würde der Part fehlen, würde der Button erst nach einer Aktion sichtbar werden
// was hier nicht gewünscht ist da der Spieler einen Knopf drücken soll
if (localStorage.getItem("trankAufgenommen") === "true") {
  const iconContainer = document.getElementById("trank-icon-container");
  if (iconContainer) {
    iconContainer.style.display = "block";
  }
}

// Setzt den Trank-Button beim Laden der Seite zurück
window.onload = function () {
  aktualisiereTrankOption();
  aktualisiereTrankOption;
};
