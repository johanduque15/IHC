$(document).ready(function() {
        var iCnt = 0;

// Crear un elemento div añadiendo estilos CSS
        var container = $(document.createElement('input')).css({
            padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
            borderTopColor: '#999', borderBottomColor: '#999',
            borderLeftColor: '#999', borderRightColor: '#999'
        });

        $('#btAdd').click(function() {
            if (iCnt <= 10) {

                iCnt = iCnt + 1;

                // Añadir caja de texto.
                $(container).append('<input type=text class="input" id=tb' + iCnt + ' ' +
                            'value="Elemento de Texto ' + iCnt + '" />');

                if (iCnt == 1) {   

 var divSubmit = $(document.createElement('div'));
                    $(divSubmit).append('<input type=button class="bt" onclick="GetTextValue()"' + 
                            'id=btSubmit value=Enviar />');

                }

 $('#main').after(container, divSubmit); 
            }
            else {      //se establece un limite para añadir elementos, 20 es el limite
                
                $(container).append('<label>Limite Alcanzado</label>'); 
                $('#btAdd').attr('class', 'bt-disable'); 
                $('#btAdd').attr('disabled', 'disabled');

            }
        });