import { Request, Response, Router } from "express";

export const route = Router()

route.get('/helth', (req: Request, res: Response) => {
    res.status(200).json({ message: `server helth is good !!` });
});