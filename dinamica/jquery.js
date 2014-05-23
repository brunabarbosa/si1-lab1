$(document).ready(function() {
 
	$('#btn-inserir').click(function(){
			$('#select-from').append("<option value='"+$(interesse).val()+"'>"+$(interesse).val()+"</option>");
	});
    $('#btn-add').click(function(){
        $('#select-from option:selected').each( function() {
            $('#select-to').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
            $(this).remove();
        });
    });
    $('#btn-remove').click(function(){
        $('#select-to option:selected').each( function() {
           $('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
            $(this).remove();
        });
    });
 
});
