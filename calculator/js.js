var sum;
var TarifValue=1.15;
var YearValue=863;
var Util = 862500;
 var sbkts=0;
 var sos=0;
TarifValue=parseFloat(TarifValue);
YearValue=parseFloat(YearValue);
Util = parseFloat(Util);
sbkts=parseFloat(sbkts);
 sos=parseFloat(sos);
function currencyFormatDE(num) {
  return (
    num
      .toFixed(2) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' ₸'
  ) // use . as a separator
}
var totalCar=0;
var del=0;
var carAnddel;
function calculateCustoms() {
  var carValue = document.getElementById("car-value").value;
  var course = document.getElementById("dollorcourse").value;
  var delivery = document.getElementById("rangenum").value;

  if (carValue && course) {

    var customsAmount = (carValue * course) + parseFloat(delivery);
    var totalAmount = parseFloat(customsAmount);
    document.getElementById("customs-result").innerHTML = "<br>Конвертация по курсу: " + currencyFormatDE(totalAmount) ;

  } else {
    document.getElementById("customs-result").innerHTML = "Пожалуйста, введите корректные значения.";
  }


  totalCar=parseFloat(carValue * course);
  carAnddel = totalCar + parseFloat(delivery) 
  del = parseFloat(delivery);
  
  if (carValue) {last();}
}

    function getTarif(){
    var e = document.getElementById("tarifSelector");
    TarifValue = e.value;
    last();
 } 
 function getYear(){
var g = document.getElementById("yearSelector");
    YearValue = g.value;
    last();
 }
 function getUtil(){
    var g = document.getElementById("Util");
    Util = g.value;
    last();
 }

 function sbktsChekers(){
    var sbktscheker = document.getElementById("SBKTS").checked;
    if (sbktscheker) {sbkts=50000;}
        else{sbkts=0;}
        last();
 }
 function sosChekers(){
    var soscheker = document.getElementById("SOS").checked;
    if (soscheker) {sos=200000;}
        else{sos=0;}
        last();
 }
 function last(){
    sum = ((totalCar * parseFloat(TarifValue)) * 1.12) +del + 20000 + parseFloat(YearValue) + parseFloat(Util) + parseFloat(sbkts) + parseFloat(sos);
        console.log(sum);
    var e = document.getElementById("Itog").innerHTML = "итого " + currencyFormatDE(sum);
    var rash = currencyFormatDE(parseFloat(sum-carAnddel));
    var g =  document.getElementById("ras").innerHTML = "Расходы по таможенной очистке:  " + rash;
 }
    
 




