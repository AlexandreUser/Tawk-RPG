function redirect(local){
    if(local === 'profile'){
      window.location.href = "/profile";

    }
    if(local === 'logout'){
      window.location.href = "/logout";

    }
    if(local === 'cards'){
      window.location.href = "/cards";
    }
    if(local === 'new'){
        window.location.href = "/new/character";
      }
  }