document.getElementById("calculadora").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let dosis = parseFloat(document.getElementById("dosis").value);
    let inr = parseFloat(document.getElementById("inr").value);
    let nuevaDosis;
    let proximoControl;

    // Lógica basada en el INR
    if (inr < 1.5) {
        nuevaDosis = dosis * 1.2; // Aumenta 20%
        proximoControl = "Control en 7 días";
    } else if (inr >= 1.5 && inr <= 1.9) {
        nuevaDosis = dosis * 1.1; // Aumenta 10%
        proximoControl = "Control en 10-14 días";
    } else if (inr >= 2 && inr <= 3) {
        nuevaDosis = dosis; // Mantiene dosis
        proximoControl = "Control en 28-35 días";
    } else if (inr >= 3.1 && inr <= 4.9) {
        nuevaDosis = dosis * 0.9; // Disminuye 10%
        proximoControl = "Control en 14 días";
    } else if (inr >= 5 && inr <= 7.9) {
        nuevaDosis = dosis * 0.8; // Disminuye 20%
        proximoControl = "Suspender 1 día y luego control en 7 días";
    } else if (inr >= 8) {
        nuevaDosis = 0; // Suspende anticoagulante
        proximoControl = "STOP anticoagulante. Control en 24-48 horas";
    } else {
        nuevaDosis = "Valor INR no válido";
        proximoControl = "";
    }

    // Muestra el resultado
    document.getElementById("resultado").innerHTML = `
        <p><strong>Nueva dosis semanal:</strong> ${nuevaDosis.toFixed(2)} mg</p>
        <p><strong>Próximo control:</strong> ${proximoControl}</p>
    `;
});
