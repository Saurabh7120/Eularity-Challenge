export const dateFormat = date => {
    let result = new Date(date).toUTCString()
    return `${result.split(" ")[1]} ${result.split(" ")[2]}, ${result.split(" ")[3]}`
}