(this["webpackJsonphangman-frontend"]=this["webpackJsonphangman-frontend"]||[]).push([[0],{67:function(e,a,t){e.exports=t(86)},72:function(e,a,t){},84:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(13),r=t.n(o),l=(t(72),t(107)),c=t(117),s=t(57),u=t(6),m=t(30),d=t(109),f=t(110),g=t(111),h=t(118),p=t(53),b=t.n(p),y=t(54),v=t.n(y),E=t(49),D=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},appbar:{background:"none",fontFamily:"Nunito"},appbarTitle:{color:"#fff",flexGrow:"1"},appbarWrapper:{width:"80%",margin:"0 auto"},colorTitle:{color:"#5AFF3D"},container:{textAlign:"center"},icon:{color:"#fff",fontSize:"2rem"},title:{color:"#fff",fontSize:"3rem",fontFamily:"Nunito"},dropDown:{color:"#fff",fontSize:"3rem"}}}));function w(){var e=D(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),o=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)})),i.a.createElement("div",{className:e.root,id:"header"},i.a.createElement(d.a,{className:e.appbar,elevation:0},i.a.createElement(f.a,{className:e.appbarWrapper},i.a.createElement("h1",{className:e.appbarTitle},"Hangman ",i.a.createElement("span",{className:e.colorTitle},"Learning.")),i.a.createElement(g.a,null,i.a.createElement(b.a,{className:e.icon})))),i.a.createElement(h.a,Object.assign({in:o},o?{timeout:1e3}:{},{collapsedHeight:50}),i.a.createElement("div",{className:e.container},i.a.createElement("h1",{className:e.title},"Welcome to ",i.a.createElement("br",null),"Hangman",i.a.createElement("span",{className:e.colorTitle},"Learning!")),i.a.createElement(E.Link,{to:"game-explained",smooth:!0},i.a.createElement(g.a,null,i.a.createElement(v.a,{className:e.dropDown}))))))}var V=t(116),k=t(112),N=t(114),x=t(113),j=t(115),S=Object(l.a)({root:{maxWidth:345,backgroundColor:"rgba(0,0,0,0.2)",color:"#fff",margin:"20px"},media:{height:250},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2rem"},desc:{fontFamily:"Nunito",fontSize:"1.1rem",color:"#ddd"}});function C(e){var a=e.photo,t=e.checked,n=S();return i.a.createElement(h.a,Object.assign({in:t},t?{timeout:1e3}:{},{collapsedHeight:50}),i.a.createElement(k.a,{className:n.root},i.a.createElement(x.a,{className:n.media,image:a.imageUrl,title:a.title}),i.a.createElement(N.a,null,i.a.createElement(j.a,{className:n.title,gutterBottom:!0,variant:"h5",component:"h2"},a.title),i.a.createElement(j.a,{className:n.desc,variant:"body2",color:"textSecondary",component:"p"},a.desc))))}var B=[{title:"Learning, but fun!",desc:"Drop that textbook, lets play some games to learn!",imageUrl:"/Hangman_Learning_Bio/assets/hangman_step_6.png",time:1500},{title:"Biology",desc:"Topics currently covered in this game is limited to Biology.",imageUrl:"/Hangman_Learning_Bio/assets/learning.jpg",time:1500}];var O=Object(l.a)((function(e){return{game_explained:{minheight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},startGameWrapper:{display:"flex"},startGame:{textDecoration:"none",alignItems:"center",margin:"0 auto",color:"#fff",justifyContent:"center",fontSize:"2rem"}}}));function W(){var e=O(),a=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),i=t[0],o=t[1];return Object(n.useLayoutEffect)((function(){function a(){var a=window.document.getElementById(e).offsetHeight;console.log(10.7*window.pageYOffset,a),13*window.pageYOffset>a&&o(!0)}return window.addEventListener("scroll",a),a(),function(){return window.removeEventListener("scroll",a)}}),[e]),i}("header");return i.a.createElement("div",null,i.a.createElement("div",{className:e.game_explained,id:"game-explained"},i.a.createElement(C,{photo:B[0],checked:a}),i.a.createElement(C,{photo:B[1],checked:a})),i.a.createElement("div",{className:e.startGameWrapper},i.a.createElement("a",{className:e.startGame,href:"/Hangman.js"},i.a.createElement(V.a,{className:e.startGame}," Start Game"))))}var H=t(55),_=t(56),L=t(59),M=t(58),G=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],T=(t(84),[{id:1,Vocabulary:"polar",Definition:"Molecule with partial charges. Mixes with water."},{id:2,Vocabulary:"nonpolar",Definition:"No partial charges. Do not mix with water."},{id:3,Vocabulary:"electronegativity",Definition:"Attraction of an atom for electrons in a covalent bond."},{id:4,Vocabulary:"cohesion",Definition:"Water molecules sticking to each other."},{id:5,Vocabulary:"adhesion",Definition:"Water molecules sticking to other surfaces."},{id:6,Vocabulary:"solute",Definition:"Something dissolved in a solution."},{id:7,Vocabulary:"solvent",Definition:"Dissolving agent of a solution."},{id:8,Vocabulary:"isomers",Definition:"Same atoms but different arrangement."},{id:9,Vocabulary:"structural isomers",Definition:"Differ in arrangement of atoms."},{id:10,Vocabulary:"geometric isomer",Definition:"Differ in arrangement around a double bond."},{id:11,Vocabulary:"enantiomers",Definition:"Structures that are like a mirror-image."},{id:12,Vocabulary:"alpha glucose",Definition:"Monomer for starch and glycogen."},{id:13,Vocabulary:"beta glucose",Definition:"Monomer for cellulose and chitin."},{id:14,Vocabulary:"cellulose",Definition:"Carbohydrate component of plant cell walls."},{id:15,Vocabulary:"starch",Definition:"Storage polysaccharide of plants."},{id:16,Vocabulary:"glycogen",Definition:"Extremely branched polymer of glucose."},{id:17,Vocabulary:"chitin",Definition:"Polysaccharide found in arthropod exoskeletons and fungal cell walls."},{id:18,Vocabulary:"tryiacylglycerol",Definition:"Glycerol and three fatty acids."},{id:19,Vocabulary:"steroids",Definition:"Made of four rings of carbon."},{id:20,Vocabulary:"cholesterol",Definition:"Steroid common in cell membranes, also in many hormones."},{id:21,Vocabulary:"peptide bond",Definition:"Bonds that connect amino acids."},{id:22,Vocabulary:"Fredrick Sanger",Definition:"Determined amino acid sequence of proteins."},{id:23,Vocabulary:"disulphide bridges",Definition:"Reinforce tertiary structure."},{id:24,Vocabulary:"primary structure",Definition:"Chain of amino acids."},{id:25,Vocabulary:"secondary structure",Definition:"Either an alpha helix or beta pleated sheet."},{id:26,Vocabulary:"tertiary structure",Definition:"Results from interactions between side chains."},{id:27,Vocabulary:"quaternary structure",Definition:"Results from two or more polypeptide subunits."},{id:28,Vocabulary:"purines",Definition:"Bases with a double-ring structure."},{id:29,Vocabulary:"pyrimidines",Definition:"Bases with a single-ring structure."},{id:30,Vocabulary:"phosphodiester bonds",Definition:"Bonds between phosphate group and pentose sugar in nucleic acids."},{id:31,Vocabulary:"synthesis",Definition:"To put together."},{id:32,Vocabulary:"digestion",Definition:"To break apart."},{id:33,Vocabulary:"dehydration synthesis",Definition:"Condensation reaction where molecules are connected by loss of a water molecule."},{id:34,Vocabulary:"hydrolysis",Definition:"Reaction where water split into \vtwo hydrogens and one oxygen; this breaks a polymer."},{id:35,Vocabulary:"anabolism",Definition:"Metabolic pathways that construct molecules, requiring energy."},{id:36,Vocabulary:"catabolism",Definition:"Metabolic pathways that break down molecules, releasing energy."},{id:37,Vocabulary:"natural selection",Definition:"A population can change over time if individuals with more fit traits leave more offspring than less fit individuals."},{id:38,Vocabulary:"evolutionary adaptation",Definition:"An accumulation of inherited characteristics that enhance organisms' ability to survive and reproduce in specific environments."},{id:39,Vocabulary:"artificial selection",Definition:"Humans modifying species for desired traits through selective breeding."},{id:40,Vocabulary:"decent with modification",Definition:"Darwin's way of referring to evolution."},{id:41,Vocabulary:"MRSA",Definition:"Methicillin-resistant Staphylococcus aureus."},{id:42,Vocabulary:"fitness",Definition:"Individuals whose inherited traits confer an advantage have a better chance of surviving in a given environment and will leave more offspring."},{id:43,Vocabulary:"homology",Definition:"Similarity resulting from common ancestry."},{id:44,Vocabulary:"homologous structures",Definition:"Same structure, different function. Comes from common ancestor."},{id:45,Vocabulary:"comparative embryology",Definition:"Embryos of vertebrates share many anatomical homologies."},{id:46,Vocabulary:"vestigial structures",Definition:"Are little or no importance to organism, but remain from an ancestor."},{id:47,Vocabulary:"biogeography",Definition:"Geographic distribution of species."},{id:48,Vocabulary:"microevolution",Definition:"Change in genetic makeup of a population from generation to generation."}]);var z=function(e){Object(L.a)(t,e);var a=Object(M.a)(t);function t(e){var n;Object(H.a)(this,t),(n=a.call(this,e)).handleClick=function(e){var a=e;console.log(a),n.setState((function(e){return{guessed:e.guessed.add(a),stage:e.stage+(e.answer.includes(a)?0:1)}}))};var i=T[Math.floor(Math.random()*T.length)];return n.state={stage:0,guessed:new Set([]),answer:i.Vocabulary.toUpperCase(),definition:i.Definition},n}return Object(_.a)(t,[{key:"guessedWord",value:function(){var e=this;return this.state.answer.split("").map((function(a){return e.state.guessed.has(a)?a:" _ "}))}},{key:"generateButtons",value:function(){var e=this;return i.a.createElement("div",{className:"buttonContainer"},i.a.createElement("div",{className:"alphaBox1"},G.slice(0,13).map((function(a,t){return i.a.createElement(V.a,{key:t,onClick:function(a){return e.handleClick(a.target.innerHTML)},disabled:e.state.guessed.has(a),className:"buttonGroup",variant:"contained",color:"secondary"},a.toUpperCase())})),i.a.createElement("br",null)),i.a.createElement("div",{className:"alphaBox2"},G.slice(13,26).map((function(a,t){return i.a.createElement(V.a,{key:t,onClick:function(a){return e.handleClick(a.target.innerHTML)},disabled:e.state.guessed.has(a),className:"buttonGroup",variant:"contained",color:"secondary"},a.toUpperCase())}))))}},{key:"render",value:function(){var e=this.generateButtons(),a=this.state.stage>=this.props.maxWrong,t=this.guessedWord().join().replace(",","").replace(/,/g,"")==this.state.answer;return i.a.createElement("div",null,i.a.createElement("img",{className:"image-box",src:"/Hangman_Learning_Bio"+"/assets/hangman_step_".concat(this.state.stage,".png")}),i.a.createElement("div",{className:"hangman-info"},i.a.createElement("p",null,this.state.definition),i.a.createElement("p",null,a?this.state.answer:this.guessedWord()),i.a.createElement("p",null,t?i.a.createElement("p",null,"You win!"):a?i.a.createElement("p",null,"You Lose!"):i.a.createElement("p",null))),e)}}]),t}(i.a.Component);z.defaultProps={maxWrong:6};var A=z,F=Object(l.a)((function(e){return{root:{minHeight:"100vh",backgroundImage:"url(".concat("/Hangman_Learning_Bio/assets/bg2.jpeg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}}}));function I(){var e=F();return i.a.createElement("div",{className:e.root},i.a.createElement(c.a,null),i.a.createElement(s.a,null,i.a.createElement(u.a,{exact:!0,path:"/"},i.a.createElement(w,null),i.a.createElement(W,null)),i.a.createElement(u.a,{exact:!0,path:"/Hangman.js"},i.a.createElement(A,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.120da325.chunk.js.map