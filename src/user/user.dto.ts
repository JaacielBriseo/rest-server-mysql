import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../config/base.dto";

export class UserDTO extends BaseDTO {
  
  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  lastName!: string;

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  phoneNumber!: string;

  @IsNotEmpty()
  city!: string;

  @IsNotEmpty()
  province!: number;

  
}