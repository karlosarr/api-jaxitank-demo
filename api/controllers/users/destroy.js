/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  let { id } = req.body;
  const destroyedUser = await Users.archive({
    id
  }).fetch();
  return res.ok(destroyedUser);
};
