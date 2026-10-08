const taskService = require("../services/taskService");


// CREATE TASK
const createTask = async (req, res, next) => {
    try {
        const task = await taskService.createTask(req.body);

        res.status(201).json({
            message: "Task created successfully",
            task
        });
    } catch (error) {
        next(error);
    }
};


// GET TASKS
const getTasks = async (req, res, next) => {
    try {
        const result = await taskService.getTasks(req.query);

        res.json(result);
    } catch (error) {
        next(error);
    }
};


// GET SINGLE TASK
const getTaskById = async (req, res, next) => {
    try {
        const task = await taskService.getTaskById(
            req.params.id
        );

        if (!task) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.json({
            task
        });
    } catch (error) {
        next(error);
    }
};


// UPDATE TASK
const updateTask = async (req, res, next) => {
    try {
        const task = await taskService.updateTask(
            req.params.id,
            req.body
        );

        if (!task) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.json({
            message: "Task updated successfully",
            task
        });
    } catch (error) {
        next(error);
    }
};


// DELETE TASK
const deleteTask = async (req, res, next) => {
    try {
        const task = await taskService.deleteTask(
            req.params.id
        );

        if (!task) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};