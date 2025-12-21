for(i=0; i<=20; i++)
{
  if(i%(2) ==1)
    console.log(i) 
}

const str = " Basic is Javascript";
const index = str.indexOf("s");

const result = [
  str.slice(0, index),
  str.slice(index + 1)
];

console.log(result);

const str1 = "😊JavaScript";
const reversed = [...str1].reverse().join("");

console.log(reversed);