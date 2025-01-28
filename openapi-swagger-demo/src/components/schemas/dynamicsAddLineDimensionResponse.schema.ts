import { IsString } from "class-validator";
import { OpenAPI } from "routing-controllers-openapi";

@OpenAPI({
  refId: "DynamicsAddLineDimensionResponse",
  description: "This is dynamics add line dimension response",
})
export class DynamicsAddLineDimensionResponse {
  @IsString()
  id!: string;

  @IsString()
  dimensionValue!: string;
}
