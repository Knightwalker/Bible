  function nl2br(str){
    return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
  }  

  module.exports = nl2br;