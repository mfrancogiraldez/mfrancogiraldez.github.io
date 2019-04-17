(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),s=(t(13),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{key:e.UniversityName,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{key:e.id,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",{key:e.skillname},l.a.createElement("span",{className:"bar-expand _".concat(e.value)}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{key:e.name,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.imgurl,title:e.description},l.a.createElement("img",{src:"".concat(e.imgurl),alt:e.description,className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(n.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.url},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),k={imagebaseurl:"https://mfrancogiraldez.github.io/",name:"Manuel Franco Giraldez",role:"Fullstack & Mobile Developer freelance",linkedinId:"manuel-franco-giraldez",skypeid:"mfrancogiraldez",roleDescription:"I like dabbling in various parts of software development and like to learn about new technologies, write technical articles, giving talks, or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/manuel-franco-giraldez/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/ormedo",className:"fa fa-github"},{name:"skype",url:"https://twitter.com/CodeTerrorist",className:"fa fa-twitter"}],aboutme:"I'm a hardworking person with passion for developing applications. Keeping an abstract thougt to the language I can master different programming languages. SOLID lover, software artisan",address:"Rio Amazonas 7 1,1\xba B, Rivas-Vaciamadrid",website:"https://mfrancogiraldez.github.io",education:[{UniversityName:"I.E.S Nervi\xf3n",specialization:"CFGS DAI",MonthOfPassing:"April",YearOfPassing:"2008",Achievements:""}],work:[{id:0,CompanyName:"Freelance",specialization:"Fullstack & Mobile developer",MonthOfLeaving:"Jul 2015",YearOfLeaving:"- Present time",Achievements:"Xamarin/React Native/Flutter/Android/iOS App developer & Full Stack web developer"},{id:1,CompanyName:"Alhambra-Eidos",specialization:"Senior Software Analist",MonthOfLeaving:"Jul",YearOfLeaving:"2015",Achievements:""},{id:2,CompanyName:"Tecnibout",specialization:"Senior Software Analist-programmer",MonthOfLeaving:"Jun",YearOfLeaving:"2014",Achievements:""},{id:3,CompanyName:"Freelance",specialization:"Mid Fullstack",MonthOfLeaving:"Jan",YearOfLeaving:"2011",Achievements:""},{id:4,CompanyName:"Everis",specialization:"Junior Fullstack",MonthOfLeaving:"Apr",YearOfLeaving:"2008",Achievements:""}],skillsDescription:"Used Frameworks & libraries",skills:[{skillname:"Xamarin",value:"80"},{skillname:"Vue.js",value:"70"},{skillname:"React Native",value:"60"},{skillname:"Flutter",value:"50"},{skillname:"HTML5",value:"70"},{skillname:"Android",value:"90"},{skillname:"iOS",value:"60"},{skillname:"CSS",value:"30"},{skillname:"Reactjs",value:"50"},{skillname:"Java",value:"90"},{skillname:"JavaScript",value:"90"},{skillname:"PHP",value:"50"}],portfolio:[{name:"My Clean Way",description:"Tech talk on Monkey Conf'18 showing how implement Clean Code con Xamarin.Forms Apps",imgurl:"https://i.ytimg.com/vi/AqAeg3KjOfI/maxresdefault.jpg"},{name:"Dashboard",description:"Vue.js administratition panel, backend done with Spring Boot 2",imgurl:"https://cloudinary-a.akamaihd.net/hopwork/image/upload/w_2048,c_limit,dpr_2/m7ifz5nvq3ofo2kzwza7.jpg"},{name:"Flutter it's not a German rock band",description:"Tech talk on CrossDevMad meetup showing how Flutter framework works",imgurl:"https://i.ytimg.com/vi/Ljzn5YocQZs/maxresdefault.jpg"},{name:"Septis 3.0",description:"Application developed to facilitate the early diagnosis and decision making in SEPSIS for the medical professional, in accordance with the latest recommendations and protocols published internationally until 2018.",imgurl:"https://cloudinary-a.akamaihd.net/hopwork/image/upload/w_2048,c_limit,dpr_2/t8vbxk4ybzbj2o9awzpr.jpg"},{name:"Inforautos",description:"With this application you can easily and quickly obtain a complete vehicle report with all the history and reliable data, which will help you to know all the details of any vehicle in which you may be interested.",imgurl:"https://cloudinary-a.akamaihd.net/hopwork/image/upload/w_2048,c_limit,dpr_2/xkeindy7nsnfq5gxxkhl.jpg"},{name:"ViveLibre",description:"Development of app for advanced mobile tele-assistance.",imgurl:"https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=h27LgfU6K7aJUhTFZImeQOS7ZWQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjofpPceOGmoEBFf3oHjQBnf761EjjpG469fYjof45y2pbkIpD5agYUbhl4lWdI"}],testimonials:[{description:"Los plazos los cumpli\xf3 con creces, demostrando ser la opci\xf3n ideal para un desarrollo de integraci\xf3n de servicios.",name:"Alonso - Redbility"},{description:"Su alto nivel de conocimiento t\xe9cnico lo hacen perfecto para cualquier puesto donde se requiera un alto nivel de desempe\xf1o y calidad dado que adem\xe1s es capaz de absorber de forma muy r\xe1pida cualquier informaci\xf3n y adaptarla a las necesidades de cada momento.",name:"Antonio Fernandez Castillo - Everis"}]},g=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:k}),l.a.createElement(p,{resumeData:k}),l.a.createElement(h,{resumeData:k}),l.a.createElement(E,{resumeData:k}),l.a.createElement(v,{resumeData:k}),l.a.createElement(f,{resumeData:k}),l.a.createElement(b,{resumeData:k}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.989ac961.chunk.js.map