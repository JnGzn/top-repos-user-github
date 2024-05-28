import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

// Cargar las variables desde el archivo .env
dotenv.config();
const PORT = process.env.PORT;

const app = express();


interface Repo {
    name: string;
    description: string | null;
    url: string;
    stars: number;
    forks: number;
    language: string | null;
}

app.get('/repos/:user', async (req: Request, res: Response) => {
    try {
        const GITHUB_USER = req.params.user;
        const response = await axios.get(`https://api.github.com/search/repositories`, {
            params: {
                q: `user:${GITHUB_USER}`,
                sort: 'stars',
                order: 'desc',
                per_page: 10
            }
        });

        let reposResponse = response.data.items.map((item: any) => {

            return {
                name: item.name,
                description: item.description,
                url: item.html_url,
                stars: item.stargazers_count,
                forks: item.forks_count,
                language: item.language
            }
        });

        res.json(reposResponse);
        return
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
        return
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


