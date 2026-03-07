import { webring } from '../../webring.js';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const currentIndex = webring.findIndex((indexWebsite) => indexWebsite.website === params.website);

    let prevWebsite;
    let nextWebsite;

    if (currentIndex > 0) {
        prevWebsite = webring[currentIndex - 1].website;
    } else if (currentIndex == 0) {
        prevWebsite = webring[webring.length - 1].website;
    }

    if (currentIndex < webring.length - 1) {
        nextWebsite = webring[currentIndex + 1].website;
    } else if (currentIndex == webring.length - 1) {
        nextWebsite = webring[0].website;
    }
    
    if (params.command == "next"){
        const fullWebsite = "https://" + nextWebsite;
        redirect(302, fullWebsite)
    } else if (params.command == "previous") {
        const fullWebsite = "https://" + prevWebsite;
        redirect(302, fullWebsite)
    } else {
        redirect (302, "/webring")
    }
}