import { UserController } from "./";
import { BaseRouter } from "../common/router";


export class UserRouter extends BaseRouter<UserController> {
	constructor() {
		super(UserController);
	}

	routes(): void {
		this.router.get('/', this.controller.getUser);
	}
}
