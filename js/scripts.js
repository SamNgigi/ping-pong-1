function numberArray(hard){
    var Numbers= [];

    for (var a=1; a <=hard; a++){
        if ((a % 3===0)&& (a%5===0)){
            Numbers.push("PingPong");
        }
        else if (a%5===0){
          Numbers.push("Pong");

        }
        else if (a % 3===0){
          Numbers.push("Ping");
        }
        else {
            Numbers.push(a)
        }
    };
    return Numbers;
};

function clearForm(form) {
        $(':input').not(':button, :submit').val('');
    };
