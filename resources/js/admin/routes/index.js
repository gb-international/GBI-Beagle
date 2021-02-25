import Bank from '@/admin/routes/Bank.js';
import Blog from '@/admin/routes/Blog.js';
import BookedTour from '@/admin/routes/BookedTour.js';
import Escort from '@/admin/routes/Escort.js';
import GalleryEncyclopedia from '@/admin/routes/GalleryEncyclopedia.js';
import Home from '@/admin/routes/Home.js';
import Hotel from '@/admin/routes/Hotel.js';
import Itinerary from '@/admin/routes/Itinerary.js';
import Location from '@/admin/routes/Location.js';
import Role from '@/admin/routes/Role.js';
import School from '@/admin/routes/School.js';
import Setting from '@/admin/routes/Setting.js';
import Sightseeing from '@/admin/routes/Sightseeing.js';
import Tour from '@/admin/routes/Tour.js';
import Transport from '@/admin/routes/Transport.js';
import Website from '@/admin/routes/Website.js';


export const routes = [
    ...Bank,
    ...Blog,
    ...BookedTour,
    ...Escort,
    ...GalleryEncyclopedia,
    ...Home,
    ...Hotel,
    ...Itinerary,
    ...Location,
    ...Role,
    ...School,
    ...Setting,
    ...Sightseeing,
    ...Tour,
    ...Transport,
    ...Website,
]