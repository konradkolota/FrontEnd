/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  // wersja 1 - instrukcja if
  
  // if(e.keyCode === 38 && red < 255) {
  //   document.body.style.backgroundColor = `rgb(${red+=2}, ${green+=2}, ${blue+=2})`;
  // } else if (e.keyCode === 40 && red > 0) {
  //   document.body.style.backgroundColor = `rgb(${red-=2}, ${green-=2}, ${blue-=2})`;
  // }

  console.log(red)

  // wersja 2 - instrukcja switch

    switch(e.keyCode){
      case 38: 
      document.body.style.backgroundColor = `rgb(${red<=255 ? red++: red}, ${green++}, ${blue++})`;
      console.log(red, green, blue)
      break;
      case 40: 
      document.body.style.backgroundColor = `rgb(${red>0 ? red--: red}, ${green--}, ${blue--})`;
      console.log(red, green, blue)
      break;
    }

}

window.addEventListener('keydown', changeColor)