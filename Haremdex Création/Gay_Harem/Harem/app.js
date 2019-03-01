(function($){

  $('#categoryFilter').focus().keyup(function(event){
    var input = $(this);
    var val  = input.val();

    // Si rien est tapé, on affiche tout
    if(val == ''){
      $('#filter button').show();
      $('#filter span').removeClass('highlighted');
      return true;
    }

    // On construit l'expression à partir de ce qui est tapé (.*)e(.*)x(.*)e(.*)m(.*)p(.*)l(.*)e(.*)
    var regexp = '\\b(.*)';
    for(var i in val){
      regexp += '('+val[i]+')(.*)';
    }
    regexp += '\\b';
    $('#filter button').show();

    // On parcourt chaque élément de la liste
    $('#filter').find('a>span').each(function(){
      var span = $(this);
      var resultats = span.text().match(new RegExp(regexp,'i'));

      // le text match
      if(resultats){
        var string = '';
        for(var i in resultats){
          if(i > 0){
            if(i%2 == 0){
              string += '<span class="highlighted">'+resultats[i]+'</span>';
            }else{
              string += resultats[i];
            }
          }
        }
        span.empty().append(string);
      }else{
        span.parent().parent().hide();
      }
    })
  });

})(jQuery);

$(document).ready(function() {

  $("#raretyFilter").change(function() {
    var raretyChoose = $(this).val();

    if (raretyChoose == '00') 
    {
      $("ul#filterrar li").slideDown();
      return;
    }

    var i=0;
    $("ul#filterrar li:not(#displayIfNothingFound)").each(function() {
      if ($(this).data("rarety") != raretyChoose)
        $(this).slideUp();
      else
      {
        i++;
        $(this).slideDown();
      }
    });

    if(i == 0 && $("#displayIfNothingFound:visible").length == 0)
      $("#displayIfNothingFound").slideDown();
      else if(i > 0 && $("#displayIfNothingFound:visible").length == 1)
        $("#displayIfNothingFound").slideUp();
      });
});