const express = require("express");

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const validateTask = require("../middleware/validate");

const router = express.Router();


// CREATE
router.post(
    "/",
    validateTask,
    createTask
);


// GET ALL
router.get(
    "/",
    getTasks
);


// GET ONE
router.get(
    "/:id",
    getTaskById
);


// UPDATE
router.put(
    "/:id",
    validateTask,
    updateTask
);


// DELETE
router.delete(
    "/:id",
    deleteTask
);


module.exports = router;