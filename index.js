//? Task 1 Start

// const name = prompt('Enter your name:')
// const age = +prompt('Enter your age:')
// switch (true) {
//     case age > 0 && age <= 2:
//         alert(`Hi ${name} you are child`)
//         break;

//     case age >= 12 && age < 18:
//         alert(`Hi ${name} you are teenager`)
//         break;

//     case age >= 18 && age < 60:
//         alert(`Hi ${name} you are an adult`)
//         break;

//     case age >= 60:
//         alert(`Hi ${name} you are pensioner`)
//         break;
// }

//? Task 1 End

//? Task 2 Start

// const num = +prompt('0-9 araliginda regem daxil edin:')
// switch (true) {
//     case num ==0:
//         alert(`)`)
//         break;

//     case num == 1:
//         alert(`!`)
//         break;

//     case num == 2:
//         alert(`@`)
//         break;

//     case num == 3:
//         alert(`#`)
//         break;

//     case num == 4:
//         alert(`$`)
//         break;

//     case num == 5:
//         alert(`%`)
//         break;

//     case num == 6:
//         alert(`^`)
//         break

//     case num == 7:
//         alert(`&`)
//         break;

//     case num == 8:
//         alert(`*`)
//         break;

//     case num == 9:
//         alert(`(`)
//         break;

//     default:
//         alert(`Bele bir simvol movcud deyil.`)
//         break;

// }

//? Task 2 End

//? Task 3 Start

// const num = prompt('3 regemli eded daxil edin:')
// if (num.length !== 3) {
//     alert(`3 regemli br eded yazin!`)
// }


// let num1 = parseInt(num[0]);
// let num2 = parseInt(num[1]);
// let num3 = parseInt(num[2]);

// console.log(num1, num2, num3)

// if (num1 == num2 || num1 == num3 || num2 == num3) {
//     alert(`Eyni regemi tekrarlamisiniz.`)
// }
// else {
//     alert(`Daxil etdiyiniz regemde eyni regem yoxdur.`)
// }


//? Task 3 End


//?   Task  4  Start

// const year = +prompt('Ili daxil edin')
// if(( year % 4 === 0 && year % 100 !==0) || (year % 400 === 0) ){
//     alert(`${year} ilde fevral ayi 29 gundur`)
// }
// else{ 
//     alert(`${year} ilde fevral ayi 28 gundur`)
// }


//?    Task  4   End


//?   Task  5  Start

// const input1 = +prompt('Birinci regemi daxil edin:')
// const input2 = +prompt('Ikinci regemi daxil edin:')
// let cem = 0;

// for (let i = input1 + 1; i < input2; i++) {

//     cem += i
//     console.log(i)
// }
// alert(`Daxil etdiyiniz diapazondaki regemlerin cemi:${cem} dir. `)

//?   Task  5  End

//?   Task 6   Start

// const num = + prompt("Bir regem daxil edin:")


// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i)
//     }

// }

//?   Task 6   End


//?   Task 7  Start

// const num = prompt('Regem daxil edin :')  
// let length = 0;

// for (let i = 0; i < num.length; i++) {
//     length++;
// }
// alert(`Daxil etdiyiniz regemdeki edenlerin sayi ${length} dir.`);


//?   Task 7  End 



//?   Task 8  Start

// let musbetCount = 0
// let menfiCount=  0
// let cutCount= 0
// let tekCount= 0
// let zeroCount = 0

// for(let i= 0 ; i<= 10; i++){

//     const num=+prompt('Enter number:')
    
//      if (num==0){
//         console.log(`${num}, ' 0 daxil etdiniz'`)
//         zeroCount++ ;
//      }
//      if(num>0){
//         console.log(`${num},'Musbet eded daxil etdiniz'`)
//         musbetCount++ ;
//      }
//      else if(num<0){
//         console.log(`${num},'Menfi eded daxil etdiniz'`)
//         menfiCount++ ;
//      }
//      if(num %2 ==0){
//         console.log(`${num},'Cut eded daxil etdiniz'`)
//         cutCount++ ;
//      }
//      else if(num %2 !==0){
//         console.log(`${num},'Tek eded daxil etdiniz'`)
//         tekCount++ ;
//      }
//     }
//     alert (`${zeroCount}  sifir , ${musbetCount}  musbet, ${menfiCount}  menfi , ${tekCount}  tek, ${cutCount} cut eded  daxil etmisiniz`) 

//?   Task 8   End


