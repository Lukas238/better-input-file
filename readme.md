# Better-input-file-button


**Better-input-file-button** is a jQuery plugin that replaces the system default input type="file" button for an improved -and translatable- html5 button.

![Preview](https://raw.githubusercontent.com/Lukas238/better-input-file/master/resources/preview.jpg)



[Live examples](http://jsfiddle.net/Lukas238/YwNa4/embedded/result,js,html/) 

## Installing with Bower
```script
$ bower install better-input-file
```



## Including files
```html
<!-- Bootstrap3 CSS (optional) -->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

<!-- jQuery 1.7.2+ -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<!-- better-input-file-button core JS file -->
script src="betterInputFileButton.js"></script>
```

##Initializing the plugin
You can target all input type="file" this way:

```js
$(document).ready(function(){
    
	$('input:file').betterInputFile();
	
});
```	

## Configuration
You can customize the button by passing the options as JSON object.

#### In the plugin directly:
```js
$('input:file').betterInputFile(
    {
        'btnText': 'Select a file',
        'placeholder': 'No file selected'
    }
);
```
#### With **data** atributes in the HTML input tag:
```html
<input type="file" data-btnText="Select a file" data-placeholder="No file selected" />
```

>Note: Inline configurations overrides the script configurations.


## Options

### mainClass
_string_ - Default: 'betterInputFile'

String that contains classes that will be added to the root element of the beter input button plugin.

### btnText
_string_ - Default: 'Select a file'

String that contains the button text.

### btnClass
_string_ - Default: 'btn btn-primary'

String that contains classes that will be added to the button tag. The current class add styles if Bootstrap3 CSS is present.

### placeholder
_string_ - Default: "No file selected",

String that contains the input placeholder text.	

### multiple
_boolean_ - Default: False

Define if the input file can select multiple files.

### multipleFilesText
_string_ - Default: "Files selected"

String that contains the text to display when multiple files are selected.


## Callbacks

### afterSelect
_function_ - Parameters: filelist (object)

This callback is trigger after a file or grupo of files are selected.
The **filelist** parameter returns an object that contains a list of the file of files selected.

```js
$('input:file').betterInputFile({
    afterSelect: function(filelist){
        $.each(filelist, function(key, file){
            console.log( file.name );
        })
    }
})
```


## Technologies
- jQuery
- HTML5
- CSS
-Bootstrap3


## Browser suppor
- IE7+
- Chrome
- Firefox


## Version 
* Version 1.1
