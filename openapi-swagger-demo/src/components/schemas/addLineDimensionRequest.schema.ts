import { IsString, IsNotEmpty } from "class-validator";
import { OpenAPI } from "routing-controllers-openapi";

@OpenAPI({
  refId: "AddLineDimensionRequest",
  description: "This is add line dimension request",
})
export class AddLineDimensionRequest {
  @IsString()
  @IsNotEmpty()
  dimensionValue!: string;
}
