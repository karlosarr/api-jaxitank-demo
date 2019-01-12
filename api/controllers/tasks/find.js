/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  const where = req.body.jsonSearchObj || {};
  const page = req.body.page > 0 ? req.body.page - 1 : 0;
  const limit = req.body.limit;
  const tasks = await Tasks.find(where).paginate(page, limit);
  const countTasks = await Tasks.count(where);
  return res.ok({
    rows: countTasks,
    data: tasks
  });
};
