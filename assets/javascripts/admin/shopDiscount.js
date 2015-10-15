$(function() {

  $("input[name='price']").change(function(){
    $("input[name='discount']").val("");
    $("#optionsRadios1")[0].checked=true;
  });

  $("input[name='discount']").change(function(){
    $("input[name='price']").val("");
    $("#optionsRadios2")[0].checked=true;
  });


  $('#noTimeLimit').change(function(){
    var status = $(this).prop("checked");
    if(status){
      $('input[name="startDate"]').val("");
      $('input[name="endDate"]').val("");
      $('input[name="startDate"]').attr("disabled","");
      $('input[name="endDate"]').attr("disabled","");
    }else{
      $('input[name="startDate"]').removeAttr("disabled");
      $('input[name="endDate"]').removeAttr("disabled");
    }
    // console.log('=== checked ===>',status);
  });

  $('#add').click(function(){

    // check image is uploading or not
    $('input').map(function(index) {
      if( $(this).data('uploadStatus') == 'uploading') {
        alert('尚有圖片在上傳中');
        return false;
      }
    });

    var select =[];
    $(".addSelect").each(function(index,dom){
      if(dom.checked){
        select.push(dom);
        $("#shopDiscount").append(
          '<input type=\'hidden\' form=\'shopDiscount\' name=\'productIds[]\' value =\''+ dom.value +'\' >'
        );
      }
    });

    if(select.length==0){
      alert("記得選取折扣項目喔");
      return false;
    }

    if($("input[name='title']").val()==""){
      alert("記得輸入活動名稱喔");
      return false;
    }

    if($("input[name='description']").val()==""){
      alert("記得輸入活動文案喔");
      return false;
    }

    if(!$("#noTimeLimit").prop("checked")){
      if($("input[name='startDate']").val()=="" || $("input[name='endDate']").val()==""){
        alert("記得輸入活動時間喔");
        return false;
      }
    }

    if($("input[name='price']").val()=="" && $("input[name='discount']").val()==""){
      alert("記得輸入折扣喔");
      return false;
    }

    $("#shopDiscount").submit();

  });
});
