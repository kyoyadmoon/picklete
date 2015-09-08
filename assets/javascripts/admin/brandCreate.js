(function ($) {

  $("input.fileInput").on('change.bs.fileinput', function (e) {
    // console.log(e);
    // console.log("click from select");
    var $form = $(this).parents("form").first();
    $form.ajaxSubmit(options);
  });

  var options = {
    beforeSubmit:  function (formData, jqForm, options) {
      console.log(formData);
      // var queryString = $.param(formData);
    },
    success: function (responseText, statusText, xhr, $form)  {
      console.log(responseText);
      console.log(statusText);
    }
  };

  // $('form#brand-avatar').submit(function() {
  //   return false;
  // });
}(jQuery));