#!/usr/bin/node
function print(arg){
 if(!arg){
 console.log('No argument');
 }else if(arg.length === 1){
 console.log('Argument found')
 }else{
  console.log('Arguments found');
 }
};
