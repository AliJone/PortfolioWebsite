//calling express fw
const express = require('express');
const app = express();

// setting view engine
app.set('view engine', 'ejs');

//setting public as accessable folder and initializing ejs encoding
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));


app.listen(8080,(req,res)=>{
    console.log("listening");
});


app.use((req, res, next)=>{
    console.log(req.url);
    next();
})
app.get('/',(req,res)=>{
    const projects = [
        {imgURL: '/public/images/blog-1.png',
         altname: "First Responsive Website",
         projTech: "FrontEnd",
         projName: "Responsive Website",
         projURL: "https://github.com/AliJone/FullyResponsiveWebsite",
         projText: "On the road to becoming a Full Stack Dev, but first had to brush up on my Front-End Skills. This fully responsive website is made with HTML CSS and JS with the use of some Bootsrap classes.",
         date: "17 Jan, 2020",
        },
        {imgURL: '/public/images/blog-2.png',
        altname: "FighterJet Game",
        projTech: "OOP",
        projName: "FighterJet Game",
        projURL: "https://github.com/AliJone/FighterJet_OOP",
        projText: "All aircrafts will move and animate. The fighter aircraft will detect the bullets and try to dodge it. If the bullet is within the dimensions of the aircraft, it will move either left or right depending on where the bullet is so that it can move in the opposite direction. 3. The bombers will just move forward 4. If the bullet hits the fighter or bomber, both will be destroyed along with the bullet 5. Fighter, Bomber, Bullet and Player will all inherit from the base Vehicle class 6. You need to implement your own doubly linked list 7. You need to have your code properly commented and follow proper coding guidelines. Refer to this link (https://rhamedy.medium.com/a-short-summary-of-java-coding-best-practices-31283d0167d3) 8. All objects that go beyond the screen or are hit by bullets should be removed from the linked list and the Player's aircraft should not go beyond the screen limits 9.Ã‚Â You have to submit a complete UML diagram of your code both as an *.uxf and *.jpg file 10.Ã‚Â The code should work without any bugs and errors",
        date: "17 Jan 2020",
        },
        {imgURL: '/public/images/blog-3.png',
        altname: "Porfolio Website",
        projTech: "FullStack",
        projName: "Porfolio Website",
        projURL: "https://github.com/AliJone/PortfolioWebsite",
        projText: "Portfolio website using HTML, CSS, Js, and Bootstrap as Front-End and Node.js, Express.js and Mongoose.js as Back-End",
        date: "10 Sep 2020",
        },
    ];
    res.render('index', {projects : projects});
});
app.get('/contact.html',(req,res)=>{
    res.render('contact');
});
app.get('/index',(req,res)=>{
    console.log(req.url);
    res.redirect('/#blog');
});
app.get('/index.html',(req,res)=>{
    res.redirect('/');
});
app.use((req,res)=>{
    res.status(404).render('404');
});
