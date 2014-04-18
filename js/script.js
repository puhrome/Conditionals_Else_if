/**
 * Else if Created by Phirom Yim on 4/17/14.
 */
//Else if conditionals
//choosing between 3 or more blocks

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with parent

//if kid is old enough, print to console
//if kid is over 48 inches in height
if( kidHeight > minHeight){
    //you can ride code print
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //else should never have a condition attached to it
    //you can ride with a parent present
    console.log("You can ride with a parent present");
    //print out sorry kid code
}else{
    console.log("Sorry kid, you've got some growing to do.")
}

