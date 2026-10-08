const validateTask = (req, res, next) => {
    const { title, priority, status } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    const validPriorities = ["low", "medium", "high"];

    if (priority && !validPriorities.includes(priority)) {
        return res.status(400).json({
            error: "Priority must be low, medium, or high"
        });
    }

    const validStatuses = ["pending", "in-progress", "completed"];

    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({
            error: "Status must be pending, in-progress, or completed"
        });
    }

    next();
};

module.exports = validateTask;