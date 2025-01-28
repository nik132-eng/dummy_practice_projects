import { ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';
import { Middleware } from 'routing-controllers';


@Middleware({ type: "before" })
export class AuthMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction): void {
        console.log("Running authentication middleware");
        next();
    }
}