const app = require('./app');

const port = 3003;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
});