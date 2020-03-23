//Write a program that accepts one or more numbers as command-line arguments  
//and prints the sum of those numbers to the console (stdout). 
    
    const args = process.argv
    let sum = 0//var responsável pela soma inicializada em 0

    if (args.length > 2){
      for (let i = 2, l = args.length; i<l; i++){
        sum += parseInt(args[i], 10)
      }//parseInt analisa um argumento e o retorna como inteiro
    }
    
    console.log(sum)
   
//Resolução oficial :
//'use strict'
    
//let result = 0

//for (let i = 2; i < process.argv.length; i++) {
//  result += Number(process.argv[i])
//}

//console.log(result)
