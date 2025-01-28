import "reflect-metadata";
import express from "express";
import { createExpressServer } from "routing-controllers";
import * as swaggerUi from 'swagger-ui-express';
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { LineDimensionController } from "./controllers/lineDimension.controller";
import * as bodyParser from 'body-parser'
import { GetUserController } from "./controllers/getUser.controller";
import { ProductController } from "./controllers/product.controller";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const routingControllersOptions = {
    controllers: [LineDimensionController, GetUserController, ProductController],
    
    middlewares:[],
  };
  
  const expressApp = createExpressServer(routingControllersOptions);


const storage = getMetadataArgsStorage();
const spec = routingControllersToSpec(storage, routingControllersOptions);



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));


app.use(expressApp);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});