import { Injectable } from '@angular/core';
import { Globals } from '../app.globals';

export class UrlHelper {
  base: string;
  app: string;
  path: string;
  globals: any = Globals;

  static urlFor(app: string, path: string): string {
    const helper = new UrlHelper(app, path);
    return helper.getUrl();
  }

  constructor(app: string, path: string) {
    this.base = this.globals.get(`BASE_${app.toUpperCase()}_URL`);
    this.path = path;
  }

  getUrl(): string {
    return `${this.base}/${this.path}`;
  }

}

