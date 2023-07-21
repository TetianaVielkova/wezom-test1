const element = document.getElementById('telephone');
var maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: false,
    placeholderChar: 'X' 
};
var mask = IMask(element, maskOptions);
