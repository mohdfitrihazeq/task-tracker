import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const task = await prisma.task.create({
        data: { name, description, completed: false }
    });
    res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { name, description, completed } = req.body;

    try {
        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                ...(name !== undefined && { name }),
                ...(description !== undefined && { description }),
                ...(completed !== undefined && { completed }),
            },
        });

        res.json(updatedTask);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Update failed' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    await prisma.task.delete({ where: { id } });
    res.json({ message: 'Deleted' });
});


export default router;
