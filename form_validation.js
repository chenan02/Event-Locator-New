<script type="text/javascript">

function formValidator(form) {
    
    //check if fields are empty
    
    if(form.name.value == "") {
    alert("Please enter the event name.");
    form.name.focus();
    return(false);
    }
    
    
    if(form.date.value == "") {
    alert("Please enter the event date.");
    form.date.focus();
    return(false);
    }
    
    
    if(form.time.value == "") {
    alert("Please enter the event time.");
    form.time.focus();
    return(false);
    }
    
    
    if(form.location.value == "") {
    alert("Please enter the event location.");
    form.location.focus();
    return(false);
    }

return true;

}

</script>