import app from "../app";
import request from "supertest";

describe('Request Limit', () => {
    it('should return a 200 if the request limit is not exceeded', async () => {
        const response = await request(app).get(`/ping`)
        expect(response.status).toBe(200);
    })

    it('should return a 429 if the request limit is exceeded', async () => {
        for (let i = 0; i < 20; i++) {
            await request(app).get(`/ping`)
        }
        const response = await request(app).get(`/ping`)
        expect(response.status).toBe(429);
    })
})