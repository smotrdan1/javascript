





exports.getDate =function (){
const options={
  weekday:"long", day:"numeric", month :"long"
};
const today =new Date();
return today.toLocaleDateString("en-us",options);}



exports.getday=function(){
const today =new Date()
const options={
  weekday:"long"
};
return today.toLocaleDateString("en-us",options);}
