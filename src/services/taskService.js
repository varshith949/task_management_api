const Task = require("../models/Task");

// CREATE TASK
const createTask = async (taskData) => {
    return await Task.create(taskData);
};


// GET TASKS
const getTasks = async (query) => {
    const {
        status,
        priority,
        sort = "-createdAt",
        page = 1,
        limit = 10
    } = query;

    const filter = {};

    if (status) {
        filter.status = status;
    }

    if (priority) {
        filter.priority = priority;
    }

    const pageNumber = Math.max(Number(page), 1);

    const limitNumber = Math.min(
        Math.max(Number(limit), 1),
        100
    );

    const skip = (pageNumber - 1) * limitNumber;

    const tasks = await Task.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limitNumber);

    const totalTasks = await Task.countDocuments(filter);

    return {
        tasks,
        page: pageNumber,
        limit: limitNumber,
        totalTasks,
        totalPages: Math.ceil(totalTasks / limitNumber)
    };
};


// GET SINGLE TASK
const getTaskById = async (taskId) => {
    return await Task.findById(taskId);
};


// UPDATE TASK
const updateTask = async (taskId, taskData) => {
    return await Task.findByIdAndUpdate(
        taskId,
        taskData,
        {
            new: true,
            runValidators: true
        }
    );
};


// DELETE TASK
const deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
};


module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};