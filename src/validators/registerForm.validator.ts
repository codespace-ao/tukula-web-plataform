import { z } from 'zod';

// Esquema de validação para o formulário de login
export const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, { message: 'E-mail ou telefone é obrigatório' })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^\d{10,}$/.test(value), {
      message: 'Insira um e-mail válido ou telefone com pelo menos 10 dígitos',
    })
});