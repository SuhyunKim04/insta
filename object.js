let arr = [ 1, 2,3,4,5]

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach( data => {
    console.log(data)
})

for(let data of arr) {
    console.log(data)
}
let result =  arr.map(data => data * 2)
console.log(result);

result = arr.map(data => Math.pow(data, 3));
console.log(result);

result = arr.filter(data => data%2 === 0)
console.log('even numbers : ', result)

let obj = { 
    name : 'ejey',
    age : 30,
    phone : '12345'

}


console.log(obj.name);

let users = [
    {
        name : 'ejey',
        cmt : 'hello world',
        photo : './images/photo_2.jpg',
        time : '2024-01-04'
    },
    {
        name : 'suhyun',
        cmt : 'i love milk',
        photo : './images/photo_2.jpg',
        time : '2024-01-04'
    }
]

console.log(users[1].name)


users.forEach( data  => {
    console.log(data.cmt)
})