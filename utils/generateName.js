function nameGenerator() {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const UpperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'

    const collection = (lowerCaseLetters + UpperCaseLetters + numbers).split('')

    let name = ''

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * collection.length)
        name += collection(index)
    }
    return name
}



module.exports = nameGenerator