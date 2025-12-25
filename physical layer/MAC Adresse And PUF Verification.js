console.log("Welcome to MAC Adresse And PUF Verification");

var MAC = prompt(" ");

if (MAC == "1E F0 12 34 F7 80"|| "56 78 9A BC AC F1" || "DE F0 12 3D EF 01" ||"10 10 10 E0 80 80" || "10 10 11 00 80 80" )
{}

var PUF = prompt(" ");

if (MAC == "1E F0 12 34 F7 80" && PUF == "0001111011110000000100100011010011110111100000001001000110100000" ) { 
    
    console.log("The Device is Authenticate");
}

else if  (MAC == "56 78 9A BC AC F1 " && PUF == "0101011001111000100110101011110010101100111100010011010101111000" ) { 
    
    console.log("The Device is Authenticate");
}


else if (MAC == "DE F0 12 3D EF 01" && PUF == "0000110111101111000000010010001111011110111100000001001000100000" ) { 
    
    console.log("The Device is Authenticate");
}


else if (MAC == "10 10 10 E0 80 80" && PUF == "0001000000010000000100001110000010000000100000001000011100000000" ) { 
    
    console.log("The Device is Authenticate");
}


else if (MAC == "10 10 11 00 80 80 " && PUF == "0001000000010000000100010000000010000000100000001000100000000000" ) { 
    
    console.log("The Device is Authenticate");
}

else {
  console.log("The Device is Failed to Authenticate"); 
}
        
