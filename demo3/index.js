const fs=require('fs');

fs.writeFile('test.txt','test', (err)=>{
    if (err){
        console.log(err);
    }
    console.log('creado');
});


console.log('continuo');