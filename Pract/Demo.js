
// let num=152; // 152/370
// let rev=0;
// let rem='';
// let temp=num;

// while(num>0){
//     rem=num%10;
//     rev=rev+(rem*rem*rem);
//     num=num/10;
// }
// if(temp===rev){
//     console.log(` ${temp} is armstrong num `)
// }else{
//     console.log(`its not a armstrong num`);
    
// }

// 2. Count the number of vowels in a string. a,e,i,o,u,A,E,I,O,U
var str = "shivanand";
let count=0;
let obj={};

for(let i=0;i<str.length-1;i++){
    if(str[i]=='a' || str[i]=='e' ||
        str[i]=='i' ||str[i]=='o' || str[i]=='u'
    )
    {   
        if(!obj[str[i]]){
        obj[str[i]] = 1;
    }else{
        obj[str[i]] = obj[str[i]] + 1
    }
    }
}
console.log(obj);


// 3. Count how many times a specific character appears in a string.

let str="shivanand";
let obj={}

for(let i=0;i<str.length-1;i++){

    if(!obj[str[i]]){
        obj[str[i]] = 1;
    }else{
        obj[str[i]] = obj[str[i]] + 1
    }
}
console.log(obj)

// 4. Remove all spaces from a string.
let str1="S H I V ";
let res="";

for(let i=0;i<str1.length-1;i++){

    if(!(str1[i]===" ")){
        res=res+str1[i]
    }
}
console.log(res);

// 5. Convert all lowercase letters to uppercase (without using .toUpperCase() directly on the whole string).

let str2="ShiVanAnD";
let res2="";
for(let i=0;i<str2.length;i++){
    if(str2[i].toLocaleLowerCase()){
        res2 = res2 + str2[i].toLowerCase();
    }    

}
console.log(res2);

// 6. Find the index of the first occurrence of a given character in a string.
let str3="chandankar";
occurance=0;
var char="a";

for(let i=0 ; i<str3.length ; i++)
{
    if(str3[i]===char){
        occurrence = i;
        break;
    }
}
console.log(occurrence);

// 7. Replace all vowels with *.
let str4="shivanand";
let abc="";
for(let i=0 ; i<str4.length ; i++){

    if(str4[i]=='a' || str4[i]=='e' || str4[i]=='i' 
        || str4[i]=='o' || str4[i]=='u'
    ){
        abc= abc + "*";
    }else{
        abc=abc + str4[i];
    }
}

console.log(abc);

// 8. Check if a string is a palindrome.
var str5="madam";
var rev="";
for(let i=str5.length-1 ; i>=0 ; i--){
    rev = rev + str5[i];
}
console.log(`${str5} is palindrome =`,str5===rev);

// 9. Count the number of words in a string (words separated by spaces).
var str6="This is Shiv chandankar";
var word="";
var arr=[];
for(let i=0;i<str6.length;i++){

    if(str6[i]===" "){
        arr.push(word);
        word="";
    }else if(i===str6.length-1)
    {
        word=word + str6[i];
        arr.push(word)
    }
    else{
        word = word + str6[i];
    }
}
console.log(arr.length);



var str7="Hi Good Morning Have a Good Day";
let word="";
let arr9=[];

for(let i=0;i<str7.length;i++){

    if(str7[i]===" "){
        arr9.push(word);
        word="";
        console.log(arr9);   
    }else if(i===str7.length-1){
        word=word + str7[i];
        arr9.push(word);
    }else{
        word=word+str7[i]
    }
}
console.log(arr9);

// 12. Remove duplicate characters from a string.
let str8="shivanand";
let remdup ='';
let dup='';

for(let i=0;i<str8.length;i++){
    if(!remdup.includes(str8[i])){
        remdup = remdup + str8[i];
    }else{
        dup=dup+str8[i];
    }
}
console.log(remdup);
console.log('duplicates ', dup);

let resd=new Set(str8)
console.log(resd);




// ================SetTimeout==============================
setTimeout(()=>{
    console.log('Hello World')
},3000);

let str="Shiv";
setInterval(()=>{
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
},1000)


function msgdelay(message,delay){
    setTimeout(()=>{
        console.log(`Hello ${message}`)
    },delay)
}

msgdelay("Shiv",2000);

function time(time,delay){
    setTimeout(()=>{
        console.log(`Current time is ${time}`)
    },delay)
}

time(time.now,2000);

// reverse a String
let uname="Shivanand";
let rev=uname.split("").reverse().join("")
console.log(rev);

// trime
let st="  Veer ";
console.log(st.trim());

// replace() replaceAll()
let str=" i love cats, Cats are cute";
console.log(str.replace("cats","dogs"));

console.log(str.replaceAll("cats","dogs"));
console.log(str.equalIgnoreCase.replaceAll("cats","dogs"));

// promices --> promices is represent a value that