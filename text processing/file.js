function extract(input){

    let fileInfo = input.split('\\').pop()
    
    let lastDotIdx = fileInfo.lastIndexOf('.')
    let chars = fileInfo.split('')

    let name = chars.splice(0, lastDotIdx)

    let extension = chars.splice(1, chars.length)

    console.log(`File name: ${name.join('')}`)
    console.log(`File extension: ${extension.join('')}`)

}
extract('C:\\Internal\\training-internal\\Template.pptx')