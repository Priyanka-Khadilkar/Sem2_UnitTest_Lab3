//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(idIn){
	"use strict";
	let validId = false;
	let regexId = /^[Nn][0-9]{8}$/; 
	if(idIn === undefined){
		validId = false;
	}
	else if(regexId.test(idIn)){
		validId = true;
	}
	return validId;
}
