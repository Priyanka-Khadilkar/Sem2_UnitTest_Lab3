//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
 
 function test_checkHumbrId (valueIn, expected) {
    "use strict";
    let result = checkHumbrId(valueIn);
    let msg ="";
	
    if(result===expected)
    {
     msg = "Value tested: " + valueIn + " | Expected result:  " + expected + "      | <span style='color:green;'>==PASSED==</span> <br />";
    }
    else{
     msg = "Value tested: " + valueIn + " Expected result: " + expected + "    <span style='color:red;'>xxFAILEDxx</span><br />";
}    
    
    let msgBox = document.getElementById("data");
    msgBox.innerHTML += msg;
     
 }

 
test_checkHumbrId("n01234567", true);
test_checkHumbrId("N01234567", true);
test_checkHumbrId("012345678n", false);
test_checkHumbrId("x", false);
test_checkHumbrId(undefined, false);
test_checkHumbrId("n00000001", true);
test_checkHumbrId("N99999999", true);
test_checkHumbrId("n000000019", false);
test_checkHumbrId("n0000000", true);
