//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = 450003000038000;
    var topSalesPerson = "Lydia";

    var  salesperson = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];

    var Decsale = ["1,500", "15,000", "30,000", "12,000", "45,000", "25,000", "8,000"];

    var Jansale = ["10,000", "25,000", "20,000", "14,000", "30,000", "16,000", "30,000"];

    var Febsale = ["8,000", "7,500", "45,000", "10,000", "38,000", "22,000", "15,000"];
    var commission = 0;

    var topcommission = 0;
    var sum= 0;
   
    for (var x = 0; x < salesperson.length; x++) 
    { 
        var totalsale = Decsale[x] + Jansale[x] + Febsale[x];
        
        if (totalsale>=3000) 
        {
             commission = totalsale * 0.08;
        }
        
           
            
        
        if (totalsale>=15000)
        {
            commission = totalsale * 0.05;
        }
        if (totalsale>=1000) 
        {
            commission = totalsale * 0.02;
        }  
        if (totalsale>=0)
        {
            commission = totalsale * 0.01;
        }
         
        var avg = totalsale[x] / 3;

        
        console.log("The saleperson "+ salesperson[x] + totalsale + "The average is  "+ avg);
        

        

        
        
        sum = sum + totalsale[x];
        if (commission > topcommission)
        {
            topcommission = commission;
        }
           
        
        
            
            
        
        
    }
    console.log("The top Commission is  " + topCommission + "The Top SalesPerson is  " + topSalesPerson );
    

    

    //Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:

    1. Save salesperson names in an array
    
    

    2. Save December sales amount in an array

    3. Save January sales amount in an array

    4. Save February sales amount in an array

    5. In a "For" loop, for each person

        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if total sales is greater than 30000 then commission = total sales * 0.08 
        If total sales is greater than 15000).....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson 
        to determine if this is the top commission

    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/

}