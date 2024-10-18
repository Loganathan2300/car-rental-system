import google from '../assets/image/google.jpg';
import facebook from '../assets/image/image_2024_10_16T11_18_58_435Z.png';
import github from '../assets/image/image_2024_10_16T11_18_58_438Z.png';

export const socialLinks = [
  {
    href: "https://google.com",
    src: google, 
    alt: "Google",
    width: 30,
    height: 30,
  },
  {
    href: "https://facebook.com",
    src: facebook, 
    alt: "Facebook",
    width: 30,
    height: 30,
  },
  {
    href: "https://github.com",
    src: github, 
    alt: "GitHub",
    width: 30,
    height: 30,
  },
];

  
  export const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

 export const tableData = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: "false",
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: "false",
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: "false",
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: "true",
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: "false",
    },
  ];
  
 export const TableHeaders = ["id","title", "completed"];

 export const BASE_URL="https://66deed9ade4426916ee2f978.mockapi.io";

//  https://66deed9ade4426916ee2f978.mockapi.io/api/v1/school
