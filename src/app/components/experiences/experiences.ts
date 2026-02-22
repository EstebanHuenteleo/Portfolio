import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';

interface Experience {
  date: string;
  company: string;
  position: string;
  type: string;
  description: string;
}

@Component({
  selector: 'app-experiences',
  imports: [FadeInDirective],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      date: 'Nov. 2024 - Actualidad',
      company: 'Cygnus - DOIN (Kloc)',
      position: 'Desarrollador Back-end',
      type: 'Jornada completa',
      description:
        'Parte del equipo core de Kloc, primer proyecto de DOIN, nueva razón social de Cygnus enfocada en productos tecnológicos (en proceso de certificación DT). Desarrollo desde cero de una aplicación de control de asistencia: marcaje, métricas, reportes y gestión de usuarios. Backend en C# .NET con LINQ, procedimientos almacenados y SQL Server Management Studio. Planificación y coordinación directa con el equipo de desarrollo.',
    },
    {
      date: 'Abr. 2023 - Sept. 2024',
      company: 'Conavicoop',
      position: 'Desarrollador Full Stack',
      type: 'Jornada completa · Híbrido',
      description:
        'Administración de proyectos de viviendas, subsidios y créditos. Migración de módulos de PHP a C# con Razor, Bootstrap, jQuery y Entity Framework. Desarrollo de consultas SQL y procedimientos almacenados. Aprendizaje y práctica de versionamiento con Git en Visual Studio.',
    },
    {
      date: 'Ene. 2022 - Sept. 2022',
      company: 'Puente Sur GTR',
      position: 'Desarrollador Full Stack',
      type: 'Jornada completa · Híbrido',
      description:
        'Desarrollo de módulos con CakePHP y MySQL para proyectos de retail. Participación en el diseño e inicio de una PWA para gestión de shoppers (We Shop). Migración de datos a plataforma BUK consumiendo su API desde los sistemas internos. Optimización de bases de datos y creación de maquetas.',
    },
  ];
}
