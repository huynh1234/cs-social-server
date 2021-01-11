import { ROUTE } from "core/interfaces";
import express from "express";
export default class App {
  public app: express.Application;
  public port: string | number;
  constructor(routes: ROUTE[]) {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port : ${this.port}`);
    });
  }

  private initializeRoutes(routes: ROUTE[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}
