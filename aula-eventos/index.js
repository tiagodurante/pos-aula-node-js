let events = require('events')
let eventEmitter = new events.EventEmitter()
    // Criamos uma função que será chamada quando um evento acontecer
let cagar = () => {
        console.log('cagando...')
    }
    // // Ligamos o evento vontadeDeCagar com a função cagar
    // eventEmitter.on('vontadeDeCagar', cagar)
    //
    // // Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
    // eventEmitter.emit('vontadeDeCagar')

// Criamos as funções que serão chamadas quando o evento acontecer
let correrParaOBanheiro = () => {
    console.log('correndo para o banheiro...')
}
let pegarPapelHigienico = () => {
    console.log('pegando o papele higienico com calma e cuidado...')
}
let limparABunda = () => {
    console.log('limpando o orifício anal para ficar macio e sedoso...')
}
let passarBomAr = () => {
    console.log('passando Bom Ar para mascarar o fedor de gambá apodrecendo...')
}

// Ligamos o evento vontadeDeCagar com as funções
eventEmitter.on('vontadeDeCagar', correrParaOBanheiro)
eventEmitter.on('vontadeDeCagar', cagar)
eventEmitter.on('vontadeDeCagar', pegarPapelHigienico)
eventEmitter.on('vontadeDeCagar', limparABunda)
eventEmitter.on('vontadeDeCagar', passarBomAr)

eventEmitter.emit('vontadeDeCagar');
