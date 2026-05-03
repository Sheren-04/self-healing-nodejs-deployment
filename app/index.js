import express from 'express';

const app = express();
const port = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    return res.json({
        message: 'Hey there! This is Sheren. And it's v2'
    });
});

app.get('/health', (req, res) => {
    return res.status(200).send("Everything's fine!");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});