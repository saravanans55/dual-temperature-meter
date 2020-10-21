# Dual-Temperature-Meter JQuery Plugin
Dual-Temperature-Meter plugin is a JavaScript library that helps you to create a beautiful, dynamic temperature meter with two types of temperature units (Fahrenheit, Celsius) information. You can change your temperature meter's indication color.
![alt text](https://github.com/saravanansdesign/dual-temperature-meter/blob/master/sample/sample.png?raw=true)
<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.
### Download

1. Download the [dual-temperature-meter.min.js](https://github.com/saravanansdesign/dual-temperature-meter/blob/master/dual-temperature-meter.min.js) file & "temperature-img.png".
2. And refer those files on your project header
```sh
<script src="jquery-3.5.1.min.js"></script>
<script src="dual-temperature-meter.min.js" type="text/javascript"></script>
```
3. Initialize
```sh
$("#thermometer").dualTemperatureMeter({
            target : "thermometer",         // Your Dom ID
            degree : "f",                   // Input Temperature Unit f or c
            height : 300,                   // Meter Height
            temperature : 60,               // Input Temperature
            color : "#f41e33",              // Custom Level Indication Color
            actions : function(value){
                //Temperature conversion values in (°F, °C) both units
            }
        });
```
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Saravanan S - [@iamsanarockingz](https://twitter.com/iamsanarockingz) - saravanans.design@gmail.com

Project Link: [https://github.com/saravanansdesign/dual-temperature-meter](https://github.com/saravanansdesign/dual-temperature-meter)
