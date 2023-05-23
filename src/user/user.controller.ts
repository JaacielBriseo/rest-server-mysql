import { Request, Response } from 'express';

export class UserController {
	getUser(req: Request, res: Response) {
		return res.json({
			message: 'Hello from user',
		});
	}
}
