$("#submit").on("click", function(){
    $.ajax({
      method : "POST",
      url : "http://10.9.0.102/api/box/<id>"

    })
});