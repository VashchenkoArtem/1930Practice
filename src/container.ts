import type { Config } from "./config";
import { createPasswordHasher } from "./lib/password";
import { createTokenService } from "./lib/tokens";
import { createDb } from "./prisma/db";
import { createCategoryRepository } from "./repositories/category";
import { createProductRepository } from "./repositories/products";
import { createRefreshSessionRepository } from "./repositories/refresh-session";
import { createAuthRepository } from "./repositories/user";
import { createCategoryService } from "./services/category/category";
import { createProductService } from "./services/products/products";
import { createAuthService } from "./services/user/user";
import { createCategoryHandlers } from "./transport/handlers/category/category";
import { createProductHandler } from "./transport/handlers/product/product";
import { createAuthHandler } from "./transport/handlers/user/user";
import { createRequireAuth } from "./transport/middlewares/require-auth";
import { createAuthRouter } from "./transport/routers/auth";
import { createCategoryRouter } from "./transport/routers/category";
import { createProductRouter } from "./transport/routers/product";

export function createContainer(config: Config){
    const db = createDb(config.databaseUrl)
    const users = createAuthRepository(db)
    const sessions = createRefreshSessionRepository(db)
    const passwords = createPasswordHasher(config.passwordPepper)
    const tokens = createTokenService(config.jwt)
    const auth = createAuthService({users, sessions, passwords, tokens})
    const requireAuth = createRequireAuth(tokens)
    
    const productRouter = createProductRouter(createProductHandler(createProductService(createProductRepository(db))))
    const categoryRouter = createCategoryRouter(createCategoryHandlers(createCategoryService(createCategoryRepository(db))))
    const authRouter = createAuthRouter(createAuthHandler(auth), requireAuth)

    return {
        routers: {
            productRouter,
            categoryRouter,
            authRouter
        }
    }
}