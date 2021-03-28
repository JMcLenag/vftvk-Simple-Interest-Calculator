//Function to compute the interest
function compute()
{
    //Get the values input by thye user
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    //Validate the principal value
    //Check that it is greater than 0
    if(principal <= 0){
        //Alert message
        alert("Enter a positive number")
        //Reset the focus
        document.getElementById("principal").focus()
        return
    }

    //Calculate the interest 
    interest = principal*years*rate/100
    //Calculate the year (from now)
    future_year = parseInt(new Date().getFullYear()) + parseInt(years)

    //Set the text in the result span
    //Use an additional class 'highlight' for the numbers
    document.getElementById('result').innerHTML = 
    "If you deposit "
    + "<span class='highlight'>" + principal + "</span>" 
    + "," + "<br>" 
    + "at an interest rate of " 
    + "<span class='highlight'>" + rate + "%" + "</span>"
    + "." + "<br>"
    + "You will receive an amount of " 
    + "<span class='highlight'>" + interest + "</span>" 
    + "," + "<br>"
    + "in the year " 
    + "<span class='highlight'>" + future_year + "</span>"
}

//Function to display the interest rate
function range_reader()
{
    //Get the rate input by the user
    interest_rate = document.getElementById("rate").value + '%';
    //Set the value for the display element
    document.getElementById("interest_rate").innerHTML = interest_rate;
}


        