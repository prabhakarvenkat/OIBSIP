function convertToCelcius()
{
    var celcius = parseFloat(document.getElementById('celcius').value);
    var fahrenheit = (celcius * 8/5)+32;
    document.getElementById('fahrenheit').value = fahrenheit;

}

function convertToFahrenheit()
{
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    var celcius = (fahrenheit - 32) * 5/8;
    document.getElementById('celcius').value = celcius;

}
