# Weather APP

Weather APP built in HTML, CSS and vanilla Javascript.   
This Weather APP is the final project I delivered after attending the Front-End development course @SheCodes. 

# How does it look like?

### Mobile

![Screenshot 2021-01-15 at 16 25 08](https://user-images.githubusercontent.com/74925057/104745955-eff7eb80-574e-11eb-8842-b378bd8f2fa2.png)

### Desktop

![Screenshot 2021-01-15 at 16 29 41](https://user-images.githubusercontent.com/74925057/104745935-e9697400-574e-11eb-9b23-a297b230437a.png)

Try it yourself at https://gracious-johnson-3440af.netlify.app/

# How does the code look like?

Sneak peak: temperature conversion (Celsius to Fahrenheit and viceversa)

```
function convertToF(event) {
  event.preventDefault();
  let temperatureElement = document.getElementById("temp");
  Celsius.classList.remove("active");
  Fahrenheit.classList.add("active");
  let fahrenheit = (celsius * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheit);
}

function convertToC(event) {
  event.preventDefault();
  let temperatureElement = document.getElementById("temp");
  Fahrenheit.classList.remove("active");
  Celsius.classList.add("active");
  temperatureElement.innerHTML = Math.round(celsius);
}

let celsius = null;

let unitF = document.getElementById("Fahrenheit");
unitF.addEventListener("click", convertToF);

let unitC = document.getElementById("Celsius");
unitC.addEventListener("click", convertToC);
```

# Credits

* Weather data is provided by www.openweathermap.org
* Request to API made via https://github.com/axios/axios
* Reviews and guardian angels behind the scenes are the folks of www.shecodes.io and my mentor Carlos Crespo



:rocket: 
Sera-iso
