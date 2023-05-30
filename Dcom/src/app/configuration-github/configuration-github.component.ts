// Component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-github',
  template: `
  <div>
    <h1>Configuration of Github</h1>
    <p>{{ error }}</p>
  </div>
  `,
  styleUrls: ['./configuration-github.component.css']
})
export class ConfigurationGithubComponent implements OnInit {
  error: string = '\'NoneType\' object has no attribute \'replace\'';

  constructor() { }

  ngOnInit(): void {
  }

}