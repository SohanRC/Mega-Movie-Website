
import { MdLocalMovies } from "react-icons/md";
import { SiShowtime } from "react-icons/si";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiReservedFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Movies',
		label: 'Movies',
		path: '/Dashboard',
	    icon:<BiSolidCameraMovie />
	},
	{
		key: 'Theatres',
		label: 'Theatres',
		path: '/Theaters',
        icon:<MdLocalMovies />
	},
	{
		key: 'Showtimes',
		label: 'Showtimes',
		path: '/showTime',
        icon:<SiShowtime />
	},
	{
		key: 'Reservations',
		label: 'Reservations',
		path: '/income',
        icon:<RiReservedFill />
	},
	{
		key: 'Users',
		label: 'Users',
		path: '/promote',
        icon:<FaUsers />

	},
	
]