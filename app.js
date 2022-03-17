const express = require('express')

const path = require('path')



const app= express()

        
        const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath))





app.listen(3000, () => {
console.log('Servidor corriendo en el puerto 3000')

})





app.get('/', (req, res) =>{
res.sendFile(path.resolve(__dirname, "./views/home.html"))



}   )  


//iniciar un repo en nuestro git personal para ejercicio en clase 11, no se terminó eso.