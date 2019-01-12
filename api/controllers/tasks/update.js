/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  let { name, details, date, status, id } = req.body;
  const updateTask = {
    ...(name && { name }),
    ...(details && { details }),
    ...(date && { date }),
    ...(status && { status })
  };
  const updatedTask = await Tasks.update(id)
    .set(updateTask)
    .fetch(); //NOSONAR
  return res.ok(updatedTask);
};
