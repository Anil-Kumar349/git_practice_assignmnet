
let str="madam"

let rev="";
for(i=str.length-1;i>=0;i--){
    rev+=str[i];
}
if(str==rev){
    console.log("Yes");
}
else{
    console.log("No");
}