const express = require('express');
const cors = require('cors');
const app = express();



app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

let runPy = function (urlPage) {
    return new Promise(function (success, nosuccess) {

        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['python/validator.py', urlPage]);

        pyprog.stdout.on('data', function (data) {
            success(data);
        });

        pyprog.stderr.on('data', (data) => {
            nosuccess(data);
        });
    });
}

app.get('/', async (req, res) => {
    const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    params = new URLSearchParams(url.search);
    var urlPage = params.get('url');
    //console.log(urlPage);
    runPy(urlPage).then(function (fromRunpy) {
        res.json({
            dados: fromRunpy.toString(),
        });
    });

});

app.listen(8080, () => {

    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});