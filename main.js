$(document).ready(function(){

  


   



    $('form').on('submit', function(e){
        e.preventDefault();
       
            
        
    

        
    

        const novaTarefa = $('#todo-input').val();
        
        
       
        
        const novoItem = $('<li></li>');
       
        
        
        
        
        $(novoItem).click(function(){
            $(novoItem).addClass('done');
        });
        
        
        
        novoItem.text(novaTarefa);
        novoItem.appendTo('ul');





        
        $('#todo-input').val('');


     });

     
    
})



