$(document).ready(function(){
    
    
    
    $('#button').click(function() {
        var toAdd = $('input[name=interesses]').val();
        
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
	
	
	$(document).on('click', '.item', function(){
        $(this).remove();    
    });
    
});