import { IsString, IsNotEmpty } from "class-validator";
import { OpenAPI } from "routing-controllers-openapi";


@OpenAPI({
  name: 'GetUserResponse',
    description: "This is get user response"
})
export class GetUserResponse{
    @IsString()
    @IsNotEmpty()
    id!: string;
    
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;
}