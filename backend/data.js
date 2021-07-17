import bcrypt from "bcryptjs";  
const data={
    users:[
        {
            name:'Mukesh',
            email:'mukeshbhatt12344@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true
        },

        {
            name:'Ankit',
            email:'sumanbhatt12344@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false
        },


    ],
    products:[
        {
            
            name:'Nike Pant',
            category:'Pant',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Adidas Fit Pant',
            category:'Pant',
            image:'/images/p2.png',
            price:100,
            countInStock:20,
            brand:'Addidas',
            rating:4.0,
            numReviews:10,
            description:'high quality product'
        }, 
        {
            name:'Lacoste Free Pant',
            category:'Pant',
            image:'/images/p3.jpg',
            price:220,
            countInStock:30,
            brand:'Lacoste',
            rating:4.8,
            numReviews:17,
            description:'high quality product'
        },
         {
            name:'Nike Slim pant',
            category:'Pant',
            image:'/images/p4.jpg',
            price:78,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            numReviews:14,
            description:'high quality product'
        }, 
        {
            name:'Puma Slim Pant',
            category:'Pant',
            image:'/images/p5.jpg',
            price:180,
            countInStock:15,
            brand:'Puma',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
         {
            name:'Adidas Fit Pant',
            category:'Pant',
            image:'/images/p6.jpg',
            price:139,
            countInStock:12,
            brand:'Nike',
            rating:4.5,
            numReviews:15,
            description:'high quality product'
        }
    ]
};
export default data;