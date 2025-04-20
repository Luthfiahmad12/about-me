import me from '../assets/me.jpg'
import bmsayur from '../assets/project-1.png'
import mscoffe from '../assets/project-2.png'
import bagaslc from '../assets/project-3.png'
import gazebo from '../assets/gazebo.png'
import reseler from '../assets/reseller.png'
import paud from '../assets/paud.png'
import { educationItem, workItemProps } from '../components/List'

interface dataType {
    img: string
    name: string
    title: string
    desc: string
    email: string
    social: {
        linkedin: string
        wa: string
        github: string
    }
}

export const ProfileData: dataType = {
    img: me,
    name: 'Achmad Luthfi Afif',
    title: 'web developer',
    desc: 'Saya merupakan lulusan Program Studi Manajemen Informatika dengan pengalaman dalam pengembangan aplikasi web serta keterampilan sebagai Full Stack Developer dari tahun 2020, menguasai tech stack frontend modern dan backend PHP. Antusias dalam mempelajari teknologi baru seperti modern Javasvript, modern PHP, dan artificial intelligence. Berambisi berkarier sebagai IT Developer yang mampu memberikan solusi efektif bagi perusahaan.',
    email: 'luthfiafif625@gmail.com ',
    social: {
        linkedin: 'luthfi-afif12',
        wa: '+6282138682214',
        github: 'Luthfiahmad12',
    },
}

export interface Project {
    id: number
    name: string
    image: string
    description?: string
    status: boolean
}

export const ProjectList: Project[] = [
    {
        id: 1,
        image: mscoffe,
        name: 'e-commerce kedai mscoffe',
        description: 'Sistem penjualan dan pemesanan kopi berbasis web',
        status: true,
    },
    {
        id: 2,
        image: bmsayur,
        name: 'berkah mandiri sayur',
        status: true,
    },
    {
        id: 3,
        image: bagaslc,
        name: 'Sistem Informasi dan booking online',
        description:
            'Sistem Informasi dan booking online pada Bagas Luxury Camp',
        status: true,
    },
    {
        id: 4,
        image: gazebo,
        name: 'Sistem Informasi dan pemasaran gazebo',
        description:
            'Sistem Informasi dan pemasaran gazebo pada UD TALI JAYA berbasis web',
        status: true,
    },
    {
        id: 5,
        image: reseler,
        name: 'Sistem manajemen reseler',
        description:
            'Sistem manajemen reseler pada PT CARICA SUMBING berbasis web',
        status: true,
    },
    {
        id: 6,
        image: paud,
        name: 'Sistem pembayaran SPP',
        description: 'Sistem pembayaran SPP pada PAUD KASIH IBU',
        status: true,
    },
]

export const Works: workItemProps[] = [
    {
        name: 'Freelance Web Developer',
        periode: '2022 - Present',
        tasks: [
            'Mengembangkan aplikasi web menggunakan teknologi modern frontend (React.js) dan backend (Laravel PHP) sesuai dengan kebutuhan klien',
            'Penulisan clean code dan struktur data menggunakan pendekatan Repository Pattern dan Design Pattern',
        ],
    },
    {
        name: 'IT Support',
        periode: 'Juli 2022 - Desember 2022',
        tasks: [
            'Mengelola data penjualan sesuai dengan pedoman',
            'Melakukan Digital Branding dan Digital Marketing',
            'Pembuatan sistem informasi penjualan dan pengolahan data',
        ],
    },
]

export const EducationsItems: educationItem[] = [
    {
        link: 'https://unsiq.ac.id',
        periode: '2019-2023',
        major: 'D-III Manajemen Informatika - IPK 3.76',
        university: 'Universitas Sains Al-Quran',
    },
]

interface cerificateList {
    name: string
    organizer: string
    link?: string
    logo?: string
}

export const certificates: cerificateList[] = [
    {
        name: 'Belajar Membuat Front-End Web untuk Pemula',
        organizer: 'Dicoding Indonesia',
        link: 'https://www.dicoding.com/certificates/1RXY2GE29XVM',
    },
    {
        name: 'Belajar Dasar Pemrograman JavaScript',
        organizer: 'Dicoding Indonesia',
        link: 'https://www.dicoding.com/certificates/2VX34D9WJZYQ',
    },
    {
        name: 'Belajar Dasar Pemrograman Web',
        organizer: 'Dicoding Indonesia',
        link: 'https://www.dicoding.com/certificates/JMZV4RMORXN9',
    },
    {
        name: 'Belajar Membuat Aplikasi Web dengan React',
        organizer: 'Dicoding Indonesia',
        link: 'https://www.dicoding.com/certificates/2VX34EJ6QZYQ',
    },
    {
        name: 'Belajar Dasar AI',
        organizer: 'Dicoding Indonesia',
        link: 'https://www.dicoding.com/certificates/2VX34EJ6QZYQ',
    },
]
