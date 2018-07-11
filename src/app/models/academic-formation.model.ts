import { Base } from './base.model';

export class AcademicFormation extends Base {
  public institution: string;
  public course: string;
  public isConcluded: boolean;
  public startDate: Date;
  public endDate: Date;
}
