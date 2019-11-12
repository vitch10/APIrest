import {Request, Response} from "express";

export class Routes {    
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Solicitação GET bem-sucedida !!!!'
            })
        })
        
        // Contact 
        app.route('/contact') 
        // GET endpoint 
        .get((req: Request, res: Response) => {
        // Get all contacts            
            res.status(200).send({
                message: 'Solicitação GET bem-sucedida !!!!'
            })
        })        
        // POST endpoint
        .post((req: Request, res: Response) => {   
        // Create new contact         
            res.status(200).send({
                message: 'Solicitação POST bem-sucedida !!!!'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get((req: Request, res: Response) => {
        // Get a single contact detail            
            res.status(200).send({
                message: 'Solicitação GET id contacto bem-sucedida !!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a contact           
            res.status(200).send({
                message: 'Solicitação PUT bem-sucedida !!!!'
            })
        })
        .delete((req: Request, res: Response) => {       
        // Delete a contact     
            res.status(200).send({
                message: 'Solicitação DELETE um contacto bem-sucedida !!!!'
            })
        })
    }
}