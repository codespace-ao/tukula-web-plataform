import { z } from 'zod';

// Esquema de validação para o formulário de login
export const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, { message: 'E-mail ou telefone é obrigatório' })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^\d{10,}$/.test(value), {
      message: 'Insira um e-mail válido ou telefone com pelo menos 10 dígitos',
    }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    .regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
    .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' }),
});