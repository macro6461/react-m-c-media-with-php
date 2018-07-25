const express = require('express');
const app = express();

app.use(express.static('build'));
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html'));

app.listen(process.env.PORT, () => console.log('listening for connections'));
