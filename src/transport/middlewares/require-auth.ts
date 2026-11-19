import type { RequestHandler } from "express";
import type { TokenService } from "../../services/user/user.types";

export function createRequireAuth(
	tokens: TokenService,
): RequestHandler {
	return (req, res, next) => {
		const token = req.cookies?.accessToken;

		if (typeof token !== "string") {
			res.status(401).json({
				message: "Unauthorized",
			});
			return;
		}
		try {
			const userId = tokens.verifyAccessToken(token);
			res.locals.userId = userId;
			next();
		} catch {
			res.status(401).json({
				message: "Unauthorized",
			});
		}
	};
}
