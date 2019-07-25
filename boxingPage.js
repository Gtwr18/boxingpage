window.onload(function(){
    $.ajax({
        type : 'POST',
        method : "GET",
        url : `http://10.9.0.102:7989/api/login/?username=${name}`,
        // data : {
        //   username : name
        // // },
        // dataType : "application/json",
        // contentType : "application/json",
        success : function(data){
        if(data === undefined){
            window.alert("등록된 사용자가 아닙니다.");
        }else{
          window.location.href=`./boxingPage.html?username=park`;
          console.log(data);
        }
      }
    })
});