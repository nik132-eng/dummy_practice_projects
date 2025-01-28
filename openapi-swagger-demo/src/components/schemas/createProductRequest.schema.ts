import { IsString, IsNotEmpty } from "class-validator";
import { OpenAPI } from "routing-controllers-openapi";

@OpenAPI({
  name : 'CreateProductRequest',
  description: "This is create product request"
})
export class CreateProductRequest {
  @IsString()
    @IsNotEmpty()
    name!: string;

  @IsString()
    @IsNotEmpty()
    description!: string;
}