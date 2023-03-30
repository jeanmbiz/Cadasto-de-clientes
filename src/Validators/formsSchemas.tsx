import * as yup from "yup";

const registerFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .max(80, "Nome pode ter no máximo 80 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido")
    .max(150, "Nome pode ter no máximo 150 caracteres"),
  password: yup
    .string()
    .matches(/[a-z]/, "Deve conter pelo menos 1 letra minúscula")
    .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula")
    .matches(/(\d)/, "Deve conter pelo menos 1 número")
    .matches(/(\W)|_/, "Deve conter pelo menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres")
    .required("Senha é obrigatória")
    .max(120, "Passowrd pode ter no máximo 120 caracteres"),
  confirmPassowrd: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha inválida")
    .required("Confirmação de senha obrigatória"),
  phone: yup
    .string()
    .required("Telefone obrigatório")
    .max(12, "Nome pode ter no máximo 12 caracteres"),
});

const loginFormSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha é obrigatória"),
});

const addCustomerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .max(80, "Nome pode ter no máximo 80 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido")
    .max(35, "Email pode ter no máximo 35 caracteres"),
  phone: yup
    .string()
    .required("Telefone obrigatório")
    .max(12, "Telefone pode ter no máximo 12 caracteres"),
});

const editProfileSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .max(80, "Nome pode ter no máximo 80 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido")
    .max(150, "Email pode ter no máximo 150 caracteres"),
  phone: yup
    .string()
    .required("Telefone obrigatório")
    .max(12, "Telefone pode ter no máximo 12 caracteres"),
});

export { registerFormSchema, loginFormSchema, addCustomerSchema, editProfileSchema };
