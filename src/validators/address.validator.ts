import { z } from 'zod';

// Definir as opções permitidas para os campos "Província" e "País"
// Exemplo: Províncias de Angola
const provinceOptions = [
  'Bengo',
  'Benguela',
  'Bié',
  'Cabinda',
  'Cuando Cubango',
  'Cuanza Norte',
  'Cuanza Sul',
  'Cunene',
  'Huambo',
  'Huíla',
  'Luanda',
  'Lunda Norte',
  'Lunda Sul',
  'Malanje',
  'Moxico',
  'Namibe',
  'Uíge',
  'Zaire',
] as const;

// Exemplo: Lista de países (pode ser expandida conforme necessário)
const countryOptions = [
  'Angola',
  'Brasil',
  'Portugal',
  'Moçambique',
  'Cabo Verde',
  'Outro',
] as const;

// Esquema de validação para o formulário de endereço
export const AddressSchema = z.object({
  streetAddress: z
    .string()
    .min(5, { message: 'O endereço (casa, rua, bairro) deve ter no mínimo 5 caracteres' })
    .max(100, { message: 'O endereço não pode ter mais de 100 caracteres' })
    .nonempty({ message: 'O endereço (casa, rua, bairro) é obrigatório' }),
  communeMunicipality: z
    .string()
    .min(3, { message: 'A comuna/município deve ter no mínimo 3 caracteres' })
    .max(50, { message: 'A comuna/município não pode ter mais de 50 caracteres' })
    .nonempty({ message: 'A comuna/município é obrigatória' }),
  province: z
    .enum(provinceOptions, { message: 'Selecione uma província válida' })
    .refine((val) => provinceOptions.includes(val), { message: 'Selecione uma província válida' }),
  country: z
    .enum(countryOptions, { message: 'Selecione um país válido' })
    .refine((val) => countryOptions.includes(val), { message: 'Selecione um país válido' }),
});