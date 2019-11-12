import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/Routes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    // public mongoUrl: mongodb+srv://gildo10:<password>@api-ycsg1.mongodb.net/test
    public mongoUrl: string = 'mongodb+srv://gildo10:87654321@api-ycsg1.mongodb.net/test';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app); 
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        
        
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
        console.log('Banco de Dados Connectado');       
    }

}
export default new App().app;