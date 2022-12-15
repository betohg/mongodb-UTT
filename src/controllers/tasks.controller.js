import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    res.render("index.hbs", { tasks: tasks });
};