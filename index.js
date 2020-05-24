  // Your web app's Firebase configuration
 function Init(){
    var firebaseConfig = {
          apiKey: "AIzaSyAz_Ph5_pN1bguU4_GSpFWl5jzVvK_KqKc",
          authDomain: "murzyn.firebaseapp.com",
          databaseURL: "https://murzyn.firebaseio.com",
          projectId: "murzyn",
          storageBucket: "murzyn.appspot.com",
          messagingSenderId: "512225303247",
          appId: "1:512225303247:web:2802be89bb9b9755f675ba"
        };
        // Initialize Firebase
        window.firebase = firebase;
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        window.quotes = [];

        db.collection('quotes').get().then((snapshop) => {
            snapshop.forEach( doc => {
                window.quotes.push(doc.data());
            })
        });
 }

function Click(){
            let body = document.querySelector("body");
            let element = document.createElement('div');
            element.classList.add("block");

            body.appendChild(element);
            let item = document.querySelector(".generate");
            let block = document.querySelector(".block");
           
            item.addEventListener("click", () => {
                if(window.quotes && window.quotes.length > 0 ){
                    let random = Math.floor((Math.random() * window.quotes.length) );

                    let template = 
                    `<div class="blockQuotes hide"><div class="text">
                    ${window.quotes[random].quotes_text}</div>
                    <small>${window.quotes[random].movie},${window.quotes[random].year}</small></div>`;


                    block.innerHTML = template;
                    let blockQuotes = document.querySelector(".blockQuotes");
       
        
                    if(blockQuotes){
                        if(blockQuotes.classList.contains("hide")){
                        
                            setTimeout(() => {
                                blockQuotes.classList.remove("hide");
                                blockQuotes.classList.add("show");
                            },150);
                        }
                    }
                }
            });
       } 
       Init();
       Click();