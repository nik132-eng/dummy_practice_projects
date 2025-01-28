import { Controller, Post, Body, JsonController, HttpCode, UseBefore } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { AddLineDimensionRequest } from "../components/schemas/addLineDimensionRequest.schema";
import { DynamicsAddLineDimensionResponse } from "../components/schemas/dynamicsAddLineDimensionResponse.schema";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ContextMiddleware } from "../middlewares/context.middleware";
import { TransactionMiddleware } from "../middlewares/transaction.middleware";
import { AclMiddleware } from "../middlewares/acl.middleware";

@JsonController('/line-dimension')
export class LineDimensionController {

    @Post()
    @HttpCode(200)
    @OpenAPI({
      summary: "Add Line Dimension",
      description: "This API adds line dimension",
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: 'AddLineDimensionRequest' }
          },
        },
      },
      responses: {
        '200': {
          description: "Successful Response",
          content: {
            'application/json': {
              schema: { $ref: 'DynamicsAddLineDimensionResponse' }
            },
          },
        },
      },
    })    
    @UseBefore(AuthMiddleware, ContextMiddleware, AclMiddleware, TransactionMiddleware)
    async addLineDimension(@Body() request: AddLineDimensionRequest): Promise<DynamicsAddLineDimensionResponse> {
        // Perform your logic here (e.g., interact with a database, etc.)
        return {
          id: '123',
          dimensionValue: request.dimensionValue
        };
    }
}
