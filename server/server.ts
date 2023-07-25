import dotenv from "dotenv";
import { Server } from "./models";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: number | string;
      MONGO_CONNECTION: string;
    }
  }
}
dotenv.config({ debug: true });

const server = new Server();

server.listen();