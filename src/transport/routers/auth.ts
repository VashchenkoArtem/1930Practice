import { type RequestHandler, Router } from "express";
import type { UserHandler } from "../handlers/user/user.types";

export function createAuthRouter(
	handler: UserHandler,
	requireAuth: RequestHandler,
) {
	const router = Router();

	router.post("/register", handler.register);
	router.post("/login", handler.login);

	router.post("/refresh", handler.refresh);
	router.get("/me", requireAuth, handler.me);

	router.post("/logout", handler.logout);
	return router;
}
