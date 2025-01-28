import { Controller, Get, QueryParams, JsonController, HttpCode, UseBefore } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { GetUserRequest } from "../components/schemas/getUserRequest.schema";
import { GetUserResponse } from "../components/schemas/getUserResponse.schema";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ContextMiddleware } from "../middlewares/context.middleware";
import { TransactionMiddleware } from "../middlewares/transaction.middleware";
import { AclMiddleware } from "../middlewares/acl.middleware";

@JsonController('/users')
export class GetUserController {
  @Get()
  @HttpCode(200)
  @OpenAPI({
    summary: "Get User Details",
    description: "This API retrieves user details based on query parameters.",
    parameters: [
      {
        name: "userId",
        in: "query",
        description: "User's ID to retrieve.",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      '200': {
        description: "Successful Response",
        content: {
          'application/json': {
            schema: {
              type : 'object',
              $ref: GetUserResponse.name,
            },
          },
        },
      },
      '404': {
        description: "User not found",
      }
    },
  })
    @UseBefore(AuthMiddleware, ContextMiddleware, AclMiddleware, TransactionMiddleware)
    async getUser(@QueryParams() request: GetUserRequest): Promise<GetUserResponse> {
      // Perform logic here
      return {
        id: request.userId,
        name: 'Test User',
        email: 'testuser@test.com',
      };
    }
}