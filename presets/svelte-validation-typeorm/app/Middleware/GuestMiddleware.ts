import type { Middleware } from "@lunoxjs/core/contracts";

const GuestMiddleware: Middleware = {
  async handle(req, next) {
    if (await req.auth().check()) {
      return redirect("/admin");
    }
    return next(req);
  },
};

export default GuestMiddleware;
