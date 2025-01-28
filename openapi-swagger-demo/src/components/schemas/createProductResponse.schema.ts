import { IsString, IsNotEmpty, IsDate } from "class-validator";
import { OpenAPI } from "routing-controllers-openapi";

@OpenAPI({
    name : 'CreateProductResponse',
  description: "This is create product response"
})
export class CreateProductResponse {
  @IsString()
    @IsNotEmpty()
    productId!: string;

  @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsDate()
    @IsNotEmpty()
    createdAt!: Date;
}