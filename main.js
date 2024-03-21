Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('change', updateUI);
});

// Event-Listener für den "Berechne" Button hinzufügen
document.getElementById('calculateButton').addEventListener('click', calculateAndShowBMI);

// Funktion zur Aktualisierung des UI
function updateUI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);
}

// Funktion zur Berechnung des BMI
function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;
}

// Funktion zur Berechnung und Anzeige des BMI beim Klick auf den "Berechne" Button
function calculateAndShowBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Bitte geben Sie gültige Werte ein.");
        return;
    }

    const bmi = calculateBMI(weight, height);
    document.getElementById('result').innerText = `Ihr BMI beträgt: ${bmi}`;
}