$(document).ready(function(){
$('#selectCar').change(function(){
    var selectCAR = $('#selectCar option:selected').text();
    console.log(selectCAR)
    if(selectCAR == "Cars"){
     $('.cars-e3lan').fadeIn();
    }else{
        $('.cars-e3lan').fadeOut();
    }
})

});