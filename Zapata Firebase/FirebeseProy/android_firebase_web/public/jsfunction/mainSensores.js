$("#imgDiaFrio").siblings().fadeOut(3000);
$("#imgDiaFrio").fadeIn(3000);
$("#dia").text("Dia Frio");

//creamos una referencia a la base de datos para enviar el valor de la pagina en que nos encontramos
let dbRef = firebase.database().ref("Event");

// llamamos los valores cadavez que un cambio  existe en la base de datos
dbRef.on('value', function(snap){
  document.getElementById("general").innerHTML = "Todo bien 👍";
  document.getElementById("touch").innerHTML = "👍";
  document.getElementById("acc").innerHTML = "👍";
  document.getElementById("light").innerHTML = "👍";
  document.getElementById("prox").innerHTML = "👍";
  document.getElementById("gps").innerHTML = "👍";
  console.log(snap.val());
  switch(snap.val()?.toString()) {
    case "0":
      document.getElementById("general").innerHTML = "⚠️Posible intruso husmeando⚠️";
      document.getElementById("prox").innerHTML = "⚠️Alerta⚠️";
      break;
    case "1":
      document.getElementById("general").innerHTML = "⚠️Alguien intenta abrir o ha roto los cristales⚠️";
      document.getElementById("touch").innerHTML = "⚠️Alerta⚠️";
      break;
    case "2":
      document.getElementById("general").innerHTML = "⚠️Probable impacto o robo de autopartes externas⚠️";
      document.getElementById("acc").innerHTML = "⚠️Alerta⚠️";
      break;
    case "3":
      document.getElementById("general").innerHTML = "⚠️Intruso en el auto⚠️";
      document.getElementById("light").innerHTML = "⚠️Alerta⚠️";
      break;
    case "4":
      document.getElementById("general").innerHTML = "⚠️El automovil está en movimiento. Posible robo⚠️";
      document.getElementById("gps").innerHTML = "⚠️Alerta⚠️";
      break;
  }
});