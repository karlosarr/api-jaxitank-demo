/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  let { id, name, lastName, password, phone, role, status } = req.body;
  const updateUser = {
    ...(name && { name }),
    ...(lastName && { lastName }),
    ...(phone && { phone }),
    ...(password && { password }),
    ...(role && { role }),
    ...(status && { status })
  };
  const updatedUser = await Users.update(id)
    .set(updateUser)
    .fetch(); //NOSONAR
  return res.ok(updatedUser);
};
