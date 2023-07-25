import express, { Application } from "express";
import cors from "cors";
import { databaseConnection } from "../database/config";
import router from "../routes/taskManager.api.route"; 
const BlockClassJS = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

export class Server {
  private _app: Application;
  private _port: number;

  private apiRoutes: {
    taskManager: string;
  };

  constructor() {
    this._app = express();
    this._port = parseInt(process.env.PORT as string, 10) || 8000;
    this.apiRoutes = {
      taskManager: "/api/tasks",
    };

    // db connection
    this.connectDB();

    // middlewares
    this.middlewares();

    // routes
    this.routes();
  }

  middlewares() {
    this._app.use(cors());
    this._app.use(express.json());
  }
  async connectDB() {
    await databaseConnection()
  }

  routes() {
    this._app.use(
      this.apiRoutes.taskManager,
      router
    );
  }
  listen(){
    this._app.listen(this._port,() => {
      console.log(`listen port: ${this._port}`)
    })
  }
}
BlockClassJS(Server)