{
    var a = "Hej från var";
    let b = "Hej från let";
    const c = "Hej från const";
  
    console.log("Inuti blocket:");
    console.log(a);
    console.log(b);
    console.log(c);
  }
  
  console.log("Utanför blocket:");
  console.log(a); // Fungerar (var är global)
  //console.log(b);  Ger fel (let syns inte här)
  //console.log(c);  Ger fel (const syns inte här)

  /*
Reflektion uppgift 2:
1.var, let och const har olika användningsområden i relation till block. var gäller utanför blocket, medan let och const är begränsade till det inre av blocket.
2. man loggar före blocket existerar inte variablerna, inuti blocket fungerar alla, men efter blocket är endast var tillgängligt.
*/

console.log("Uppgift 3 - Jämförelser och specialvärden");

// == jämför värden med typändring
console.log("'3' == 3:", '3' == 3);   // true, eftersom '3' konverteras till tal

// === jämför utan att ändra typ (både typ och värde)
console.log("'3' === 3:", '3' === 3); // false, eftersom ena är sträng och andra är tal 

// Speciella värden
console.log("NaN === NaN:", NaN === NaN);           // alltid false
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// Truthy / Falsy test
let value = undefined;
let result = value ? "Truthy" : "Falsy";
console.log("Är undefined truthy eller falsy?", result);


/*
1. == utför typomvandling innan jämförelse, medan === gör en exakt jämförelse av både typ och värde.
2. När ett uttryck står ensamt i en ternär operation eller if-sats avgörs det ifall det är "truthy" eller "falsy".
3. NaN står för "Not a Number", undefined indikerar att en variabel existerar men saknar värde, och null betyder att ett värde medvetet har satts till "inget".
*/

console.log("Uppgift 4 - Funktioner");

// 1. Skapa en funktion som tar ett namn och returnerar "Hej + namn"
function greet(name) {
  return "Hej " + name;
}

// 2. Anropa funktionen på två olika sätt
console.log(greet("Obiwan")); // direkt i log
let hälsning = greet("Anakin");
console.log(hälsning); // via variabel

// 3. Skapa en variabel med samma namn som parametern (name)
let name = "Padme";

// 4. Testa att logga name utanför och inuti funktionen
console.log("Utanför funktionen:", name);

function testScope() {
  let name = "Inuti funktionen";
  console.log("Inuti funktionen:", name);
}

testScope();
console.log("Efter funktionen:", name);


/*
Reflektion uppgift 4:
1. En funktionsdeklaration kan anropas både innan och efter att den definieras i programmet. Funktionsuttryck och pilar-funktioner kan endast anropas efter att de har gjorts.
2. Parametern "name" används blott inom funktionen, medan variabeln "name" utanför är fristående.
3. Ett argument är värdet som skickas in (till exempel "Obiwan"), en parameter är platsen i funktionen som tar emot värdet, och en variabel är något du själv kan skapa och justera i din kod.
4. Jag valde funktionsdeklaration eftersom den är mest tydlig för denna uppgift.
*/


