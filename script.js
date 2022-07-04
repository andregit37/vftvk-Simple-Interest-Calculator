function compute()                          //read all the input values and computes the simple interest  
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); //sums the year value input with the actual year we're in
    
    
    if (principal < 1)                      //this conditional emits an alert that only positive numbers are allowed to compute interest  
    {
        alert("The principal value must be a positive number")
        document.getElementById("principal").focus();   
    }
    else                                    //if theres a positive number on the principal input box then it shows compute interest button results
    {
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark> ,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
}

function updateRate()                       //it assings on change the interest value on the range slider 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}


