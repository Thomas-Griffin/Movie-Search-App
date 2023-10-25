import request from 'supertest';
import app from '../app';

describe('Movie Routes', () => {
    describe('GET /movies/search', () => {
        it('should return an empty array if no title is given', async () => {
            const response = await request(app).get(`/movies/search`);
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(0);
        })

        it('should return a list of movies where the top result resembles the searched title', async () => {
            const response = await request(app).get(`/movies/search`).query({query: 'The Matrix'});
            expect(response.status).toBe(200);
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0].title).toContain('The Matrix');
        })

        it('Should return no results if the title is empty', async () => {
            const response = await request(app).get(`/movies/search`).query({query: ''});
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(0);
        })

        it('Should return no results if the title is whitespace', async () => {
            const response = await request(app).get(`/movies/search`).query({query: '     '});
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(0);
        })
    })

    describe('GET /movies/:id', () => {
        it('should return a movie with the given id', async () => {
            const response = await request(app).get(`/movies/603`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(603);
        })

        it('should return a 404 if the movie does not exist', async () => {
            const response = await request(app).get(`/movies/-1`);
            expect(response.status).toBe(404);
        });

        it('should return a 404 if the id is not a number', async () => {
            const response = await request(app).get(`/movies/abc`);
            expect(response.status).toBe(404);
        });

        it('should return a 404 if the id is empty', async () => {
            const response = await request(app).get(`/movies/`);
            expect(response.status).toBe(404);
        });
    })
})
