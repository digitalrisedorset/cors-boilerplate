import express, { Request, Response } from 'express'
import { config } from './config'
import cors from 'cors'

const app = express();
const port = 5000;

const corsOptions = {
    credentials: true,
    origin: [`${config.frontendUrl}:${config.frontendPort}`] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));

const router = express.Router()
router.use(cors(corsOptions))

router.get("/my-protected-cors-route", (eq: Request, res: Response) => {
    console.log('I am a route allowed')
    res.status(200).send({ "success": "You have loaded a first api route" })
})

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});