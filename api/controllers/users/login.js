/**
 *
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = async (req, res) => {
  let { name, lastName, phone, role, status } = req.body.user;
  const login = {
    ...{ name },
    ...{ lastName },
    ...{ phone },
    ...{ role },
    ...{ status }
  };
  return res.ok(login);
};
