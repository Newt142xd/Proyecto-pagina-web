window.addEventListener("scroll" ,
    function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo" ,window.scrollY>0);
  })
  
  document.getElementById("inicio-link").addEventListener("click", 
  function(event){
    event.preventDefault();
    window.location.href="Index.html";
  });
  
  document.getElementById("Arcos-link").addEventListener("click", 
    function(event){
      event.preventDefault();
      window.location.href="Arcos.html";
    });
  
    document.getElementById("Info-link").addEventListener("click", 
      function(event){
        event.preventDefault();
        window.location.href="info.html";
      });
  
      document.getElementById("Skypea").addEventListener("click",
        function(event){
          event.preventDefault();
          window.location.href="Subtitulo";
        }
      );