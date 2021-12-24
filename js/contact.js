$(function () {
    function _(id){ return document.getElementById(id); }

    function submitForm(){
        _("formBtn").disabled = true;
        _("status").innerHTML = 'Please wait ...';
        var formdata = new FormData();
        formdata.append( "n", _("name").value );
        formdata.append( "e", _("email").value );
        formdata.append( "s", _("subject").value );
        formdata.append( "m", _("message").value );
        var ajax = new XMLHttpRequest();
        ajax.open( "POST", "form_parser.php" );
        ajax.onreadystatechange = function() {
            if(ajax.readyState == 4 && ajax.status == 200) {
                if(ajax.responseText == "success"){
                    _("contactForm").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
                } else {
                    _("status").innerHTML = ajax.responseText;
                    _("formBtn").disabled = false;
                }
            }
        }
        ajax.send( formdata );
    }
    
});