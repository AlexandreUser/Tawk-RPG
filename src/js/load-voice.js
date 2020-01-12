if (annyang) {
  annyang.setLanguage("pt-BR");
  // Let's define a command.

  var commands = {
    "fala :valor": valor,
    "Oi":function(){
        playOneSound("../sounds/ola.mp3");

    }
    }
  
 
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
function valor(valor) {
    alert(valor)
    if(valor == "oi"){
      playOneSound("../sounds/ola.mp3");

    }
    else{
      playOneSound("../sounds/test.mp3");

    }
}