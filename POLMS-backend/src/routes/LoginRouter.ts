import { GetUser_InfoRepository, User_Info } from './../entity/User_Info';
import { NextFunction, Request, Response, Router } from 'express';
import { getConnection } from 'typeorm';

export const router: Router = Router();

router.post('/login/', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const user_info_repository = await GetUser_InfoRepository();

        const user_count = await user_info_repository.count({
            user_id : req.body.user_id
        }).catch((err) => {
            console.log(err);
        });
        
        if(user_count == 0)
        {
            res.send({
                content: null,
                code: 0,
                message: "User Id Not Found"
            });

            console.log("User Id" + req.body.user_id + "Not Found.");
            return;
        }
        
        const user_info = await user_info_repository.findOne({
            select:["password"],
            where: [
                {user_id : req.body.user_id}
            ]
        }).catch((err) =>{
            console.log(err);
        });

        //if(user_info.password)

        
    } catch (error) {
        return next(error);
    }
})