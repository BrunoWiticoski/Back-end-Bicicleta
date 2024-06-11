import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'validarGenero', async: false })
export class IsValidGenero implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const generosDisponiveis = ['F','M'];
    return generosDisponiveis.includes(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `O genero informado '${args.value}' não é válido. Os valores válidos são: F, M`;
  }
}
