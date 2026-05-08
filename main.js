function checkHeatIndex() {
    let temp = document.getElementById("temp").value;
    let hum = document.getElementById("humidity").value;
    
    let temperature = parseFloat(temp);
    let humidity = parseFloat(hum);

    if (isNaN(temperature) || isNaN(humidity)) {
        window.alert("Only enter numbers please :)");
        return;
    }

    let heatIndex = temperature + (0.33 * humidity) - 4;

    if (heatIndex <= 27) {
        window.alert("Heat Index is " + heatIndex.toFixed(1) + "°C\nStatus: Comfortable / Cool");
    } 
    else if (heatIndex <= 32) {
        window.alert("Heat Index is " + heatIndex.toFixed(1) + "°C\nStatus: Warm");
    } 
    else if (heatIndex <= 37) {
        window.alert("Heat Index is " + heatIndex.toFixed(1) + "°C\nStatus: Hot");
    } 
    else if (heatIndex <= 41) {
        window.alert("Heat Index is " + heatIndex.toFixed(1) + "°C\nStatus: Very Hot / Caution");
    } 
    else {
        window.alert("Heat Index is " + heatIndex.toFixed(1) + "°C\nStatus: Extreme Heat / Danger");
    }
}