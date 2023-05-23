import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
	constructor(
		private readonly userService: UserService = new UserService()
		) {}

	async getUsers(req: Request, res: Response) {
		try {
			const users = await this.userService.findAll();
			res.status(200).json(users);
		} catch (error) {
			console.error(error);
		}
	}

	async getUserById(req: Request, res: Response) {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				message: 'No id on params',
			});
		}
		try {
			const user = await this.userService.findById(id);
			res.status(200).json(user);
		} catch (error) {
			console.error(error);
		}
	}

	async createUser(req: Request, res: Response) {
		try {
			const user = await this.userService.createUser(req.body);
			res.status(200).json(user);
		} catch (error) {
			console.error(error);
		}
	}

	async updateUser(req: Request, res: Response) {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				message: 'No id on params',
			});
		}
		try {
			const user = await this.userService.updateUser(id, req.body);
			res.status(200).json(user);
		} catch (error) {
			console.error(error);
		}
	}

	async deleteUser(req: Request, res: Response) {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				message: 'No id on params',
			});
		}
		try {
			const user = await this.userService.deleteUser(id);
			res.status(200).json(user);
		} catch (error) {
			console.error(error);
		}
	}
}
