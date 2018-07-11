import { Base } from './base.model';
import { RelationalList } from '@base/decorators/relational.decorator';
import { AcademicFormation } from '@base/models/academic-formation.model';
import { ProfessionalExperience } from '@base/models/professional-experience.model';
import { EnumFunction } from '@base/decorators/enum.decorator';

export class Person extends Base {
  public _id: string;
  public isActive: boolean;
  public picture: string;
  public birthDate: Date;
  public name: string;
  public email: string;
  public phone: string;
  public address: string;
  public latitude: number;
  public longitude: number;
  public createdAt: string;
  public tags: Array<String>;

  private _formations: Array<AcademicFormation>;
  private _experiences: Array<ProfessionalExperience>;
  private _gender: string;

  @RelationalList()
  @Reflect.metadata('design:type', AcademicFormation)
  get formations(): Array<AcademicFormation> { return this._formations; }
  set formations(value: Array<AcademicFormation>) { this._formations = value; }

  @RelationalList()
  @Reflect.metadata('design:type', ProfessionalExperience)
  get experiences(): Array<ProfessionalExperience> { return this._experiences; }
  set experiences(value: Array<ProfessionalExperience>) { this._experiences = value; }

  @EnumFunction({
    'female': 'Feminino',
    'male': 'Masculino'
  })
  get gender() { return this._gender; }
  set gender(value: string) { this._gender = value; }

}
