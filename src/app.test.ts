import request from 'supertest';
import { app } from './app';  // Importa la app desde el archivo original
import axios from 'axios';

// Mock de axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GET /repos/:user', () => {
    it('should return a list of repositories for a given user', async () => {
        const mockData = {
            data: {
                items: [
                    {
                        name: 'repo1',
                        description: 'description1',
                        html_url: 'url/repo1',
                        stargazers_count: 100,
                        forks_count: 50,
                        language: 'JavaScript'
                    },
                    {
                        name: 'repo2',
                        description: 'description2',
                        html_url: 'url/repo2',
                        stargazers_count: 200,
                        forks_count: 100,
                        language: 'TypeScript'
                    }
                ]
            }
        };

        mockedAxios.get.mockResolvedValue(mockData);

        const response = await request(app).get('/repos/testuser');
        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy()
    });

    it('should return 500 if there is an error', async () => {
        mockedAxios.get.mockRejectedValue(new Error('API Error'));

        const response = await request(app).get('/repos/testuser');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            error: 'Internal server error',
            message: 'API Error'
        });
    });
});
