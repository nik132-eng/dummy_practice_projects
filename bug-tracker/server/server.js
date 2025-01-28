import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { join } from 'path';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


// Load swagger document
const swaggerDocument = JSON.parse(
    readFileSync(join(process.cwd(), 'server', 'swagger.json'), 'utf8')
  );
  
  // Serve Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  
  // Mock database
  let bugs = JSON.parse(
    readFileSync(join(process.cwd(), 'server', 'db.json'), 'utf8')
  ).bugs;
  
  // API routes
  app.get('/api/bugs', (req, res) => {
    res.json(bugs);
  });
  
  app.post('/api/bugs', (req, res) => {
    const newBug = {
      id: Date.now().toString(),
      ...req.body,
      status: 'open'
    };
    bugs.push(newBug);
    res.status(201).json(newBug);
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });