import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe("Surveys", async () =>{
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title:"title example",
            name:"description example"
        })
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Deve pegar todos os surveys",async() =>{
        await request(app).post("/surveys").send({
            title:"title example2",
            description:"Description example2"
        })
        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2)
    })

})
//Falta isso no package.json abaixo do script "test"
//"posttest":"rm ./src/database.test.sqlite"

