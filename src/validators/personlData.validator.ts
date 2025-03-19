import { z } from 'zod';

// Definir as opções permitidas para o campo "Gênero"
const genderOptions = ['Masculino', 'Feminino', 'Outro'] as const;

// Esquema de validação para o formulário de dados pessoais
export const personalDataSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'O nome deve ter no mínimo 2 caracteres' })
    .max(50, { message: 'O nome não pode ter mais de 50 caracteres' })
    .nonempty({ message: 'O nome é obrigatório' }),
  lastName: z
    .string()
    .min(2, { message: 'O sobrenome deve ter no mínimo 2 caracteres' })
    .max(50, { message: 'O sobrenome não pode ter mais de 50 caracteres' })
    .nonempty({ message: 'O sobrenome é obrigatório' }),
  birthDate: z
    .string()
    .nonempty({ message: 'A data de nascimento é obrigatória' })
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        return !isNaN(birthDate.getTime()) && birthDate < today;
      },
      { message: 'A data de nascimento deve ser válida e no passado' }
    ),
  gender: z
    .enum(genderOptions, { message: 'Selecione um gênero válido' })
    .refine((val) => genderOptions.includes(val), { message: 'Selecione um gênero válido' }),
  phone: z
    .string()
    .nonempty({ message: 'O telefone é obrigatório' })
    .refine(
      (phone) => {
        // Remove caracteres não numéricos (ex.: (11) 91234-5678 -> 11912345678)
        const cleanedPhone = phone.replace(/\D/g, '');
        // Verifica se tem 10 ou 11 dígitos (formatos comuns no Brasil)
        return cleanedPhone.length === 9 || cleanedPhone.length === 11;
      },
      { message: 'O telefone deve ter 10 ou 11 dígitos' }
    ),
});