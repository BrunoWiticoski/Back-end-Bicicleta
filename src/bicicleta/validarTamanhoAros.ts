import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'validarTamanhoAros', async: false })
export class IsValidTamanhoAros implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const tamanhosDisponiveis = ['ARO 12','ARO 16','ARO 20','ARO 24','ARO 26','ARO 27,5','ARO 29'];
    return tamanhosDisponiveis.includes(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `O tamanho do aro '${args.value}' não é válido. Os valores válidos são: ARO 12, ARO 16, ARO 20, ARO 24, ARO 26, ARO 27,5, ARO 29`;
  }
}
