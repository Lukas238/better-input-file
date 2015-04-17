jQuery.fn.betterInputFile = function(options) {
    this.each(function() {      
        var _inputFile = this;
        var defaults = {
            mainClass   : 'betterInputFile',
            btnText     : 'Seleccionar archivo',
            btnClass    : 'btn btn-primary',
            placeholder : 'Ningún archivo seleccionado',
            multiple: false,
            multipleFilesText: 'Archivos seleccionados',
            afterSelect:  function(filelist){
            }
        };
        options = $.extend(defaults, options);
        
        var inline_options = {
            mainClass: $(_inputFile).data('mainclass'),
            btnText : $(_inputFile).data('btntext'),
            btnClass : $(_inputFile).data('btnclass'),
            placeholder : $(_inputFile).data('placeholder'),
            multiple : $(_inputFile).data('multiple'),
            multipleFilesText : $(_inputFile).data('multiplefilestext')
        };
        options = $.extend(options, inline_options);
                
        if(options.multiple === true ){
            $(_inputFile).attr('multiple', 'multiple');
        }
        
        $(_inputFile)
            .removeClass()
            .hide()
            .wrap('<div class="'+options.mainClass+'" />')
            .wrap('<div class="input-group" />')
            .parent()
            .prepend('<input type="text" placeholder="'+options.placeholder+'" class="form-control'+((options.lblClass)?' '+options.lblClass:'')+'" readonly>')
            .prepend('<span class="input-group-btn"><button type="button"'+((options.btnClass)?' class="'+options.btnClass+'"':'')+ '>'+options.btnText+'</button></span>');
        
        var _b3if = $(_inputFile).parents('.'+options.mainClass);
        var _button = $(_b3if).find('button');
        var _label = $(_b3if).find('input.form-control');
        
        $(_inputFile).change(function (e) {
            var fileName = $(_inputFile).val().replace(/\\/g, '/').replace(/.*\//, '');
            var fileNum =  $(_inputFile).get(0).files.length;
            $(_label).val( fileNum > 1 ? options.multipleFilesText : fileName );
            
            //Callback
            options.afterSelect.call(this, $(_inputFile).get(0).files);
        });
        
        $(_button).click(function (e) {
            $(_inputFile).trigger('click');
            $(this).blur();
        });
        
    });
};