var student_array= [];

function submit(){
    for (x=1; x<=5;x++){
        var student= document.getElementById("input"+x).value;
        student_array.push(student)

    }
    console.log(student_array);
    var array_with_commas= [];

    for (y=0; y<student_array.length;y++){
        array_with_commas.push("<h4>Name-" +student_array[y]+"</h4>")
    }
    console.log(array_with_commas);
    document.getElementById("output_with_commas").innerHTML=array_with_commas;

    var array_without_commas=array_with_commas.join(" ")
    document.getElementById("output_without_commas").innerHTML=array_without_commas;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block"
}

function sort(){
    student_array.sort();
    var sorted_array_with_commas= [];
    
    for (z=0; z<student_array.length;z++){
        sorted_array_with_commas.push("<h4>Name-"+student_array[z]+"</h4>")
    }
    console.log(sorted_array_with_commas);
    document.getElementById("output_with_commas").innerHTML=sorted_array_with_commas;

    var sorted_array_without_commas=sorted_array_with_commas.join(" ")
    document.getElementById("output_without_commas").innerHTML=sorted_array_without_commas;
    

}