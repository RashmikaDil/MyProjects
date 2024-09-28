//Cody by Rashmika______________

//dress data

let itmname = ['Provencal Blue Floral',
                'Long Sleeve Hoodie',
                'Women s Crew Neck T-Shirt',
                'Crew Neck Regular Fit T-Shirt'
            ];



let img = ['./img/dress1.jpg',
            './img/dress2.jpg',
            './img/dress3.jpg',
        './img/dress4.jpg',];

let price =['1,180',
            '2990',
            '1190',
            '3790'
        ];

let mat = ['100% Lightweight Cotton',
            'Cotton Lycra',
            'Single Jersey',
            ' Poly Cotton'
        ];


let c = ['Soft Blue with White Floral Accents',
        'White',
        'Blue',
        'White'

    ];

let availability = ['IN STOCK',
                    'IN STOCK',
                    'IN STOCK',
                    'IN STOCK'
                
                ];

let discription = ['Note:*Product color may vary slightly due to different lighting conditions during photography and individual monitor settings*',
                    'Note:*Product color may vary slightly due to different lighting conditions during photography and individual monitor settings*',
                     'Note:*Product color may vary slightly due to different lighting conditions during photography and individual monitor settings*',
                     'Note: *Product color may vary slightly due to different lighting conditions during photography and individual monitor settings*',
]





//checking url data id
const url = new URLSearchParams(window.location.search);
let urlid= url.get('id');




//applying data to html
document.getElementById('c').textContent = c[urlid];
document.getElementById('name').innerHTML = itmname[urlid];
document.getElementById('img').src = img[urlid]
document.getElementById('price').innerHTML = 'LKR ' + price[urlid];
document.getElementById('dis').innerHTML = discription[urlid];
document.getElementById('avi').innerHTML = availability[urlid];
document.getElementById('mat').innerHTML = mat[urlid];







