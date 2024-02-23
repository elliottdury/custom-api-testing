/*NODE MODULES*/
const http = require('http');

/*CUSTOM MODULES*/
const app = require('./app');

/*ENV VARIABLES*/
const port = process.env.PORT || 3000;

/*LISTEN*/
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})
