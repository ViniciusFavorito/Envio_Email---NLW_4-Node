import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { UsersRepository } from "../repositories/UsersRepository";

class SurveysController{
    async create(request:Request,response:Response){
        const {title,description} = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository)

        //select * from users where email = 'email'
        // const userAlreadyExists = await surveysRepository.findOne({
        //     email
        // });

        // if(userAlreadyExists){
        //     return response.status(400).json({
        //         error:"Usuário já existente!"
        //     })
        // }

        const survey = surveysRepository.create({
            title,description
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }
    async show(request:Request,response:Response){
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find();

        return response.json(all);
    }
}

export { SurveysController };
