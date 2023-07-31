//calling express fw
const express = require('express');
const app = express();

// setting view engine
app.set('view engine', 'ejs');

//setting public as accessable folder and initializing ejs encoding
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));


app.listen(8080,(req,res)=>{
    console.log("listening on port 8080");
});


app.use((req, res, next)=>{
    console.log(req.url);
    next();
})
app.get('/',(req,res)=>{
    const projects = [
        {imgURL: '/public/images/blog-1.png',
         altname: "First Responsive Website",
         projTech: ["FrontEnd", "HTML", "CSS", "JS", "Bootstrap"],
         projName: "Responsive Website",
         projURL: "https://github.com/AliJone/FullyResponsiveWebsite",
         projText: "On the road to becoming a Full Stack Dev, but first had to brush up on my Front-End Skills. This fully responsive website is made with HTML CSS and JS with the use of some Bootsrap classes.",
         date: "10 Jan, 2020",
        },
        {imgURL: '/public/images/blog-2.png',
        altname: "FighterJet Game",
        projTech: ["OOP", "Java", "JavaFX", "UML"],
        projName: "FighterJet Game",
        projURL: "https://github.com/AliJone/FighterJet_OOP",
        projText: "All aircrafts will move and animate. The fighter aircraft will detect the bullets and try to dodge it. If the bullet is within the dimensions of the aircraft, it will move either left or right depending on where the bullet is so that it can move in the opposite direction. 3. The bombers will just move forward 4. If the bullet hits the fighter or bomber, both will be destroyed along with the bullet 5. Fighter, Bomber, Bullet and Player will all inherit from the base Vehicle class 6. You need to implement your own doubly linked list 7. You need to have your code properly commented and follow proper coding guidelines. Refer to this link (https://rhamedy.medium.com/a-short-summary-of-java-coding-best-practices-31283d0167d3) 8. All objects that go beyond the screen or are hit by bullets should be removed from the linked list and the Player's aircraft should not go beyond the screen limits 9.Ã‚Â You have to submit a complete UML diagram of your code both as an *.uxf and *.jpg file 10.Ã‚Â The code should work without any bugs and errors",
        date: "17 Jan 2020",
        },
        {imgURL: '/public/images/blog-3.png',
        altname: "Porfolio Website",
        projTech: ["FrontEnd", "HTML", "CSS", "JS", "Bootstrap", "BackEnd", "Node.js", "Express.js", "Mongoose.js"],
        projName: "Porfolio Website",
        projURL: "https://github.com/AliJone/PortfolioWebsite",
        projText: "Portfolio website using HTML, CSS, Js, and Bootstrap as Front-End and Node.js, Express.js and Mongoose.js as Back-End",
        date: "10 Sep 2020",
        },
        {
            imgURL: "/public/images/blog-3.png",
            altname: "Nahj UL Balagha App",
            projTech: ["Flutter", "Firebase Auth", "Firebase Firestore", "BLoC"],
            projName: "Nahj UL Balagha",
            projURL: "https://github.com/AliJone/Nahj-al-Balagha-App.git",
            projText: "A Revolutionary Mobile Application dedicated to the timeless wisdom and teachings of Imam Ali (a.s). The application leverages Firebase Auth for robust authentication and Firebase Firestore for efficient data storage, enabling seamless data retrieval and management.",
            date: "15 Jul 2023"
        },
        {
            imgURL: "/public/images/fnl.png",
            altname: "FNL E-Learning Website",
            projTech: ["MERN", "React JS", "Node.js", "FireStore", "setState", "useEffect"],
            projName: "FNL - Online Web Development Academy",
            projURL: "https://github.com/AliJone/FNL-E_Learning_Website.git",
            projText: "An exceptional online academia platform where learners of all ages can master programming concepts. Built on a robust MERN architecture, with local and session storage for efficient data transfer, and FireStore as a CDN for videos and pictures.",
            date: "30 Apr 2023"
        },{
            imgURL: "/public/images/premed.png",
            altname: "PreMed.pk",
            projTech: [
                "Full Stack Developer",
                "React",
                "Node.js",
                "React Native",
                "MongoDB"
            ],
            projName: "PreMed.pk Website Revamp",
            projURL: "https://premed.pk/",
            projText: "Led the initiative to revamp the PreMed.pk website, focusing on improving scalability and user experience, under the direction of the development team lead. Played a key role in cleaning up the codebase, implementing modern React practices and introducing modular components to enhance code maintainability and reusability. Improved the website's accessibility and intuitiveness, including the effective presentation of thousands of practice MCQs and interactive test modes for medical entrance exams, ultimately aiding in the success of future doctors.",
            date: "21 Jul 2023"
        },
        {
            imgURL: "/public/images/bookbetter.png",
            altname: "Bookbetter.io",
            projTech: [
                "Full Stack Developer",
                "React",
                "Node.js",
                "Express",
                "MongoDB"
            ],
            projName: "BookBetter - Online Booking Platform",
            projURL: "https://bookbetter.io/",
            projText: "Actively participated in the development of the live project [merchant.bookbetter.io](https://merchant.bookbetter.io/), with a primary focus on front-end implementation using the robust NEXT.js framework. Demonstrated proficiency in the MERN stack, designing and building compact CRUD applications to streamline data management and user experience while building our live website.",
            date: "21 Jul 2023"
        }
        
        
    ];
    projects.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
    res.render('index', {projects : projects});
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
