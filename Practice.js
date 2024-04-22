list2 = [1, 2, 3, 4]
a = 12
list = [
    'hi asdasd asdasdqdsa ads',
    a,
    123,
    'I am',
    list2,
    {},
    true
]

object = {
    name: [
        'Sasha', 'Aleksandr', 'Serega'
    ],
    secondName: 'Filipenko',
    age: '8',
    addresses: [
        {
            street: 'Street',
            city: 'City',
            state: 'State',
            zip: 'Zip',
        },
        {
            street: 'Pepe',
            city: 'Js',
            state: 'QQw',
            zip: '1488',
        }
    ]
}


object.addresses.map((item, i)=> {
    console.log(item.street)
    console.log(item.city)
    console.log(item.zip)
    console.log(item.state)
    console.log('\n')
})