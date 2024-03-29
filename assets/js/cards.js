
const cardArray = JSON.parse(localStorage.getItem("yourcards"))||[]
let saveCard = document.getElementById("save-card")
if(cardArray.length===0){
    document.getElementById("subtitle").setAttribute("class", "hide")
}

function buildCards(){
    saveCard.innerHTML=""
    cardArray.forEach(card => {
        
        var cardDIV = document.createElement("div")
        cardDIV.setAttribute("class", "card")
        cardDIV.style.width = "300px";
        cardDIV.style.position="relative"
        cardDIV.style.margin="5px"
        cardDIV.style.paddingTop="10px"
        var cardImg = document.createElement("img")
        cardImg.setAttribute("class", "card-img-top")
        cardImg.style.padding="1rem"
        cardImg.src = card.imgsrc;
        cardImg.style.width="100%"
        var messageCard = document.createElement("div")
        messageCard.setAttribute("data-color", card.colorTheme)
        messageCard.setAttribute("class", "message-card")
        messageCard.classList.add(card.position)
        messageCard.classList.add(card.colorTheme)
        var subjectLine = document.createElement("h3")
        subjectLine.textContent = "To: " + card.to + ","
    
        var messageLine=document.createElement("h4")
        messageLine.textContent=card.message
    
        var closingLine= document.createElement("h4")
        closingLine.textContent="From: "+card.from;
    
        var btnDiv=document.createElement("div")
        btnDiv.style.display="flex"
        btnDiv.style.justifyContent="space-around"
        btnDiv.style.margin="auto 0"
        btnDiv.style.padding="10px"
        var mailTag=document.createElement("a")
        mailTag.setAttribute("href",`mailto:${card.to_email}?subject:you%20received%20a%20card`)
        var sendBtn=document.createElement("button")
        sendBtn.setAttribute("class", "btn")
        sendBtn.textContent="Send"
        sendBtn.style.backgroundColor ="#f58f8f"
        sendBtn.style.color="white"
        sendBtn.addEventListener("click", function(){
            this.setAttribute("href",`mailto:${card.to_email}?subject:you%20received%20a%20card`)
        })
            mailTag.append(sendBtn)

        var printBtn=document.createElement("button")
        printBtn.setAttribute("class", "btn")
        printBtn.style.backgroundColor ="#f58f8f"
        printBtn.style.color="white"
        printBtn.textContent="Print"
        var deleteBtn=document.createElement("button")
        deleteBtn.setAttribute("class", "btn")
        deleteBtn.style.backgroundColor ="#f58f8f"
        deleteBtn.style.color="white"
        deleteBtn.textContent="Delete"
        deleteBtn.setAttribute("value", card.imgsrc)
        deleteBtn.addEventListener("click", function(){
            const updateArray=cardArray.filter(card =>card.imgsrc!==this.value)
            localStorage.setItem("yourcards", JSON.stringify(updateArray))
            document.location.reload()
        })

        btnDiv.append(mailTag, printBtn, deleteBtn)


        messageCard.append(subjectLine, messageLine, closingLine)
        cardDIV.append(cardImg, messageCard, btnDiv)

        saveCard.append(cardDIV)
    
    });
}
buildCards()
