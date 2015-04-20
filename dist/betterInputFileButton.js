/*!
 * Better-input-file-button
 * Replace the system inputfile with an -traslatable- HTML5 button
 * @URL https://github.com/Lukas238/better-input-file.git
 * @author Lucas Dasso
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
jQuery.fn.betterInputFile = function(options) {
    this.each(function() {    
		var _inputFile = this;
        var mainClass = 'betterInputFile';
        
		if( $(_inputFile).parents('.'+mainClass).length > 0){
            return true;
        }
	
		
        var defaults = {
            cssClass   : '',
            btnText     : 'Select a file',
            btnClass    : 'btn btn-primary',
            placeholder : 'No file selected',
            multiple: false,
            multipleFilesText: 'Files selected',
            afterSelect:  function(filelist){
            }
        };
        options = $.extend(defaults, options);
        
        var inline_options = {
            cssClass: $(_inputFile).data('cssclass'),
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
            .wrap('<div class="'+mainClass+((options.cssClass)?' '+options.cssClass:'')+'" />')
            .wrap('<div class="input-group" />')
            .parent()
            .prepend('<input type="text" placeholder="'+options.placeholder+'" class="form-control'+((options.lblClass)?' '+options.lblClass:'')+'" readonly>')
            .prepend('<span class="input-group-btn"><button type="button"'+((options.btnClass)?' class="'+options.btnClass+'"':'')+ '>'+options.btnText+'</button></span>');
        
        var _b3if = $(_inputFile).parents('.'+mainClass);
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