const fs = require('fs')//fs module available in a variable named fs. 

const contents = fs.readFileSync(process.argv[2], {encoding : 'utf8'})//permitir ler o arquivo desejado
                                //ou caminho pro programa no primeiro argumento
const matches = contents.match(/\n/g)

const count = matches.length

console.log(count)

/*Resposta oficial :

    'use strict'
    const fs = require('fs')
    
    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/