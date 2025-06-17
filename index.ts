import express, { Request, Response } from 'express';
import { route } from './routes/route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use(route)

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello TypeScript with Express!');
    const obj = {
        message: "hello this web app is deploy on AWS EC2 instance",
        data: {
            name: "Anand maharana",
            age: 20,
            githubLink: "www.github.com/anandmaharana2004",
            linkedinLink: "www.linkedin.com/in/anand-maharana"
        },
        statusCode: 200,
        seccess: true
    }
    res.status(200).json(obj);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
