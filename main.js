$(document).ready(function(){

    $('#finish-todo').click(function(){
        $(`${novoItem}`).addClass('.done');
    })





    $('form').on('submit', function(e){
        e.preventDeFault();
        


        const novaTarefa = $('#nova-tarefa').val();
        

        const novoItem = $('<li></li>');

         $(`${novaTarefa}`).appendto(novoItem);
     })

     $(novoItem).appendto('ul');
    
})



