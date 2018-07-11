import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

const env = environment;

@Injectable()
export class Globals {

  private static production(): any {
    return {
      RECRUIT_SERVICE_URL: 'https://dl2.pushbulletusercontent.com/'
    };
  }


  private static development(): any {
    return {
      RECRUIT_SERVICE_URL: 'https://dl2.pushbulletusercontent.com/'
    };
  }

  private static getEnv(): any {
    return this[env.stage]();
  }

  static get(key): any {
    const current = this.getEnv();
    return current[key];
  }
}
