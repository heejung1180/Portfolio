



// Resume PDF link
function resume() {
    let pdf = document.createElement('IFRAME') // Creates html in javascript
    pdf.setAttribute('src', 'ResumePrivate.pdf') 
    document.body.appendChild(pdf).style.width = '65%'
    document.body.appendChild(pdf).style.height = '750px'
};




