import { Controller, Post, Body, JsonController, HttpCode, UseBefore } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { CreateProductRequest } from "../components/schemas/createProductRequest.schema";
import { CreateProductResponse } from "../components/schemas/createProductResponse.schema";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ContextMiddleware } from "../middlewares/context.middleware";
import { TransactionMiddleware } from "../middlewares/transaction.middleware";
import { AclMiddleware } from "../middlewares/acl.middleware";
import { DynamicsHttpClient } from "../api/adapters/dynamics.http";
import { DynamicsAddLineDimensionResponse } from "../components/schemas/dynamicsAddLineDimensionResponse.schema";
import { config } from "../config/config";


@JsonController('/products')
export class ProductController {
  constructor(private readonly dynamicsClient: DynamicsHttpClient = new DynamicsHttpClient()) {

  }

  @Post()
  @HttpCode(201) // Created status
  @OpenAPI({
    summary: "Create a New Product",
    description: "This API creates a new product.",
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: "object",
            $ref: CreateProductRequest.name
          }
        }
      }
    },
    responses: {
      '201': {
        description: "Product created successfully",
        content: {
          'application/json': {
            schema: {
              type : 'object',
              $ref : CreateProductResponse.name
            }
          }
        }
      },
      '400': {
        description: "Bad Request - Invalid Input",
      },
    },
  })
  @UseBefore(AuthMiddleware, ContextMiddleware, AclMiddleware, TransactionMiddleware)
    async createProduct(@Body() request: CreateProductRequest): Promise<CreateProductResponse> {
      // Perform logic here (e.g., database creation, external API call)
       const response = await this.dynamicsClient.post(`${config.dynamicsUrl}/products`, {
        name : request.name,
        description : request.description
       }) as DynamicsAddLineDimensionResponse;

       return {
         productId : response.id,
         name: request.name,
          description: request.description,
          createdAt : new Date()
       }
    }
}