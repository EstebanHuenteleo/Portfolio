import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [FadeInDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      name: 'Backend',
      icon: '{}',
      skills: ['C#', '.NET', 'Entity Framework', 'LINQ', 'PHP', 'CakePHP'],
    },
    {
      name: 'Frontend',
      icon: '</>',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 'jQuery', 'Razor'],
    },
    {
      name: 'Bases de datos',
      icon: 'DB',
      skills: ['SQL Server', 'SSMS', 'MySQL', 'Procedimientos almacenados'],
    },
    {
      name: 'Herramientas',
      icon: '#',
      skills: ['Git', 'Visual Studio', 'WordPress', 'API REST'],
    },
  ];
}
