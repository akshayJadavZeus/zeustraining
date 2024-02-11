import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // to display all drives page
  drives: any[] = [
    {
      title: 'Walk In for Designer Job Role',
      date_time: '10-Jul-2021 to 11-Jul-2021',
      location: 'Mumbai',
      job_roles: [
        {
          role: 'Instructional Designer',
          url: '../../assets/Instructional Designer.svg',
        },
      ],
      // job_logo_src: ['../../assets/Instructional Designer.svg'],
      internship: '',
      expiry: 'Expires in 5 Days',
    },
    {
      title: 'Walk In for Multiple Job Role',
      date_time: '03-Jul-2021 to 04-Jul-2021',
      location: 'Mumbai',
      job_roles: [
        {
          role: 'Instructional Designer',
          url: '../../assets/Instructional Designer.svg',
        },
        {
          role: 'Software Engineer',
          url: '../../assets/Software Quality Engineer.svg',
        },
        {
          role: 'Software Quality Engineer',
          url: '../../assets/Software Quality Engineer.svg',
        },
      ],
      // job_logo_src: [
      //   '../../assets/Instructional Designer.svg',
      //   '',
      //   '../../assets/Software Quality Engineer.svg',
      // ],
      internship: 'Internship Opportunity for MCA Students',
      expiry: '',
    },
    {
      title: 'Walk In for Designer and Development Job Role',
      date_time: '10-Jul-2021 to 11-Jul-2021',
      location: 'Mumbai',
      job_roles: [
        {
          role: 'Instructional Designer',
          url: '../../assets/Instructional Designer.svg',
        },
        {
          role: 'Software Engineer',
          url: '../../assets/Software Quality Engineer.svg',
        },
      ],
      // job_logo_src: ['../../assets/Instructional Designer.svg'],
      internship: '',
      expiry: '',
    },
  ];
}
