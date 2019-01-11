/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  let { name, lastName, email, password, phone, role, status } = req.body;
  const createUser = {
    ...{ name },
    ...{ lastName },
    ...{ email },
    ...{ phone },
    ...{ password },
    ...(role && { role }),
    ...(status && { status })
  };
  const createdUser = await Users.create(createUser).fetch(); //NOSONAR
  return res.ok(createdUser);
};
