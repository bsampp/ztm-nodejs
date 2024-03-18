const request = require ('supertest');
const app = require ('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app).get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

describe('Test POST /launch', () => {
    const completeData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186',
        launchDate: '2022-09-08'
    }

    const missingData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186',
    }

    const invalidData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186',
        launchDate: 'x'
    }

    test('It should respond with 201 created', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeData)
            .expect('Content-Type', /json/)
            .expect(201);

        const requestDate = new Date(completeData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);
        
        expect(response.body).toMatchObject(missingData);

    });
    
    test('It should catch missing required properties', async () => {
        const response = await request(app)
            .post('/launches')
            .send(missingData)
            .expect('Content-Type', /json/)
            .expect(400);
    
        expect(response.body).toStrictEqual({
            error: 'Missing required launch property',
        });
    });
    
    test('It should catch invalid properties', async () => {
        const response = await request(app)
            .post('/launches')
            .send(invalidData)
            .expect('Content-Type', /json/)
            .expect(400);
    
        expect(response.body).toStrictEqual({
            error: 'Invalid Date',
        });
    });
});