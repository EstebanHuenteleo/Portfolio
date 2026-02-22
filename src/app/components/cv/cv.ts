import { Component } from '@angular/core';

interface Experience {
  date: string;
  company: string;
  position: string;
  description: string;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class CvComponent {
  experiences: Experience[] = [
    {
      date: 'Nov. 2024 - Actualidad',
      company: 'Cygnus - DOIN (Kloc)',
      position: 'Desarrollador Back-end',
      description:
        'Equipo core de Kloc. Desarrollo desde cero de aplicación de control de asistencia: marcaje, métricas, reportes y gestión de usuarios. Backend en C# .NET con LINQ, procedimientos almacenados y SQL Server Management Studio.',
    },
    {
      date: 'Abr. 2023 - Sept. 2024',
      company: 'Conavicoop',
      position: 'Desarrollador Full Stack',
      description:
        'Administración de proyectos de viviendas, subsidios y créditos. Migración de módulos PHP a C# con Razor, Bootstrap, jQuery y Entity Framework. Consultas SQL y procedimientos almacenados.',
    },
    {
      date: 'Ene. 2022 - Sept. 2022',
      company: 'Puente Sur GTR',
      position: 'Desarrollador Full Stack',
      description:
        'Módulos con CakePHP y MySQL para retail. Diseño e inicio de PWA para gestión de shoppers. Migración de datos a BUK consumiendo su API. Optimización de bases de datos.',
    },
  ];

  skillCategories: SkillCategory[] = [
    { name: 'Backend', skills: ['C#', '.NET', 'Entity Framework', 'LINQ', 'PHP', 'CakePHP'] },
    { name: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 'jQuery', 'Razor'] },
    { name: 'Bases de datos', skills: ['SQL Server', 'SSMS', 'MySQL', 'Procedimientos almacenados'] },
    { name: 'Herramientas', skills: ['Git', 'Visual Studio', 'WordPress', 'API REST'] },
  ];

  print(): void {
    window.print();
  }
}
