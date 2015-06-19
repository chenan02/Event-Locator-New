//non jQuery method?

<script type="text/javascript">

$("#submit").click(function() {
    if(formValidator("#form")) {
        var data = $("#form: input").serializeArray();

        //echo susscess to html result span
        $.post( $("#form").attr("action"), data, function(info) {
            $("#result").html(info); 
        });
    }
}
 
//no redirection to input.php
$("#form").submit( function() {
    return false;
}


//clear form after insert
function clearInput() {
    $("form: input").each(function() {
        $(this).val("");
    });
}

</script>