// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "-------------ESPAÑOL: Cierro mis ojos, espero ver la belleza de la oscuridad----------------------------------INGLES:   I close my eyes, hope to see the beauty of darkness------------------", time: 22},
  { text: "-------------ESPAÑOL: Para dejar que mi corazón se conforme con la luz de tus ojos-----------------------INGLES: To let my heart settle the light in your eyer------------------------------", time: 29},
  { text: "---ESPAÑOL: Podria caer desde el otro lado del cielo, podria doler, pero estaré bien-----INGLES: I might fall from way across the sky, it might hurt but ill be fine-------------", time: 37 },
  { text: "------------ESPAÑOL:El suelo podría romperse,asi que cerraré mis ojos,porque----------------------------------------------se que me despestare en tus brazos--------------------------------------------------INGLES:The ground might brack so i´ll close my eyes,cus i know i´ll wake------------------------------------------------up un your arms-------------------------------------------------------", time:43},
  { text: "------------ESPAÑOL: Si el mundo se esta desmoronando, nunca tomará lo que hay en-----------------------------------------nuestro corazón haz que dure-----------------------------------------------------INGLES: If the world is falling apart, It´ll never take what´s un our heart----", time:49 },
  { text: "------------ESPAÑOL: Haz que dure, solo cierro los ojos, listo para volar-------------------------------------------------------Hare lo mismo a tu lado, caida libre--------------------------------------------------INGLES: Make it last, just close your eyer, ready to fly---------------------------------------------------------------I´ll do the same right by your side, free fall---------------------------", time: 58},
  { text: "------------ESPAÑOL: No me importa adonde nos lleve la gravedad, alto o bajo-----------------------------------INGLES:I don´t where gravity is taking us, high and low---------------------", time: 80 },
  { text: "------------ESPAÑOL: Saltemos de esta tierra, sumenjamonos en lo descnocido------------------------------INGLES: Jump off this earth, ler´s dive into the unknown-----------------------", time: 89 },
  { text: "------------ESPAÑOL: Si caemos desde el otro lado del cielo,estoy tan seguro--------------------------------------------------------de que estaremos bien-----------------------------------------------------------INGLES:If we fall from way acrossthe sky, I´m so sure that we will be fine-----", time: 97},
  { text: "-------ESPAÑOL: Y si este es el ultimo dia, solo quiero tenerte en mis brazos---------------------INGLES: And if the is the last day of mine, I just wanna hlod you in my arms------", time: 106 },
  { text: "---------ESPAÑOL: Si el mundo se esta desmoronando, nunca tomara lo que----------------------hay en nuestro corazon, haz que dure,solo cierro los ojos, listo para volar-------------------INGLES: If the world is falling apart, it´ll never take whats in our--------------------------------------heart, make it last,just close your eyer, ready to fly---------------------------", time: 114 },
  { text: "------------ESPAÑOL: Hare lo mismo a tu lado, caída libre, sin redes de seguridad-----------------------INGLES: I´ll do the same right by your side, free fall, no safety nets----------", time: 122 },
  { text: "----ESPAÑOL: Sin remordimientos, sin vacilación, se que me salvaras cuando caiga---------------INGLES:no regrets, no hesitation, i know you´ll save me when i fall--------------", time: 132 },
  { text: "----ESPAÑOL: Si el mundo se esta desmoronando, nunca tomara lo que hay en------------------------------------------------- nuestro corazon, haz que dure------------------------------------------------INGLES: If the world is falling apart, it´ll never take what´s in our---------------------------------------------------------------heart, make it last------------------------------------------------", time:  159},
  { text: "------------ESPAÑOL: Solo cierra los ojos, listo para volar, hare lo mismo a tu lado------------INGLES: Just close your eyer, ready to fly, i´ll do the same right by your side------", time: 167},
  { text: "----ESPAÑOL: Si el mundo se esta desmoronando,nunca tomara lo que hay en-------------------------nuestro corazon, haz que dure, solo cierra los ojos, listo para volar-------------------------INGLES: If the world is falling apart, it´ll never take what´s --------------------------------------in our heart, make it last, just close your eyer,ready to fly--------------------", time: 175},
  { text: "------------------------ESPAÑOL: Hare lo mismo a tu lado, caida libre--------------------------------------------------INGLES: i´ll do the same right by your side, free fall---------------------------", time: 184 },
  { text: "-------------------------ESPAÑOL: Si el mundo se esta desmoronando------------------------------------------------------------INGLES: If the world is falling apart-----------------------------------------", time: 193 },
  { text: "-------------------------ESPAÑOL: Ahora estoy listo para la caida libre-------------------------------------------------------------INGLES: Now i´m ready to free fall-----------------------------------------", time: 201},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 10
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);