import { IsString, IsNotEmpty } from "class-validator";
import { OpenAPI } from "routing-controllers-openapi";


@OpenAPI({
  name: 'GetUserRequest',
    description: "This is get user request"
})
export class GetUserRequest{
    @IsString()
    @IsNotEmpty()
    userId!: string;
}