<script>


function clout(){
     var name=document.myform.name.value;
     var  comment=document.myform.comment.value;
if(name==null||name==""){
     alert("Dear User is your brain paining you..???");
  return false;
}else if(comment.length <3){
          alert("Comment characters must contain at least 4 letters!!");
        return false;
}
}

  </script>
  <!-- VARIABLES CAN BE MOIDIFIED TO SUIT DEVELOPER'S NEEDS-->
