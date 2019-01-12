/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  let { name, details, date, status, idUser } = req.body;
  const createTask = {
    ...{ name },
    ...(details && { details }),
    ...(date && { date }),
    ...(status && { status }),
    ...{ idUser }
  };
  const createdTask = await Tasks.create(createTask).fetch(); //NOSONAR
  return res.ok(createdTask);
};
