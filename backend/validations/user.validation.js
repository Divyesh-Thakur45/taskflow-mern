const z = require("zod");

const userValidation = z.object({
  name: z.string(),
  email: z.string().email("Enter proper email"),
  password: z.string().min(6, "minimum 6"),
});

module.exports = userValidation;
