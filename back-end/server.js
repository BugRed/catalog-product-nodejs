import "dotenv/config";
import app from './src/app.js';

app.listen(process.env.PORT, () => console.log(`Listem port: ${process.env.PORT}`));