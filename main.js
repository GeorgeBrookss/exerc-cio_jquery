$(document).ready(function(){
    $('.lista #botao').click(function(e){
        e.preventDefault();

        if ($('#nome').val() == ""){
            alert("Insira uma tarefa")
        }else{
        let nomeTarefa = $('#nome').val();
        let novaTarefa = $('<li>').text(nomeTarefa);

        $('.lista ul').append(novaTarefa);
        $('#nome').val('');
        }
    })
    $(document).on('click','ul li', function(){
        
        $(this).toggleClass('clicked');    
    })
    $('#dica').click(function(e){
        e.preventDefault();
        
        $('.tip').toggle();
        $('.tip').fadeIn(5000)
        $('.tip').fadeOut(5000)
        
    
    })


})