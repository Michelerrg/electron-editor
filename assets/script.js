const fs = require('fs');
const path = require('path');

document.querySelector('#saveButton').addEventListener('click', () => {
    const text = document.querySelector('#editor').value;

    const filePath = path.join(__dirname, 'saved_text.txt');
    
    fs.writeFileSync(filePath, text, (err) => {
        if(err) {
            console.log('Errore nel salvataggio del file');
        }
        else {
            console.log('File salvato correttamente');
        }
    });
});