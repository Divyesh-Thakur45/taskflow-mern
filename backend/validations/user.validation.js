const z = require("zod");

const signupValidation = z.object({
  name: z.string().trim().min(2, "minimum 2 length"),
  email: z.string().trim().toLowerCase().email("Enter proper email"),
  password: z.string().min(6, "minimum 6"),
});

const loginValidation = z.object({
  email: z.string().trim().toLowerCase().email("Enter proper email"),
  password: z.string().min(6, "minimum 6"),
});

module.exports = { signupValidation, loginValidation };
