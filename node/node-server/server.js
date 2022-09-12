const Express = require('express')
const axios = require('axios');
const bodyParser = require('body-parser');

const app = new Express();
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post('/api', async (req, res, next) => {
    const { body: { url, method, headers } } = req;
    const data = await axios({
        url,
        method,
        headers
    });
    res.send(JSON.stringify(data.data));
});


app.listen(8000, () => {
    console.log("服务已开启!")
});
