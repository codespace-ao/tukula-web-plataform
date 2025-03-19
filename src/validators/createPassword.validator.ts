import { z } from 'zod';

export const createPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
      .regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
      .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' }),
    repeatPassword: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
      .regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
      .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'As senhas devem ser iguais',
    path: ['repeatPassword'], 
  });