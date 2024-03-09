import { TitleValidator } from "@domain/validators/titleValidator";

export class RegexTitleValidator implements TitleValidator {
  regex: RegExp = /^[A-Za-z0-9 ]+$/;

  validate(title: string): boolean {
    return this.regex.test(title);
  }
}
