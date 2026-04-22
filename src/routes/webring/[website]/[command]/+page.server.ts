import { webring } from '../../webring';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
  const currentIndex = webring.findIndex((indexWebsite) => indexWebsite.website === params.website);

  let prevWebsite;
  let nextWebsite;
  let randWebsite = webring[Math.floor(Math.random() * webring.length)].website;
  while (randWebsite == params.website) {
    randWebsite = webring[Math.floor(Math.random() * webring.length)].website;
  }

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

  switch (params.command) {
    case "next":
      redirect(302, "https://" + nextWebsite);
    case "previous":
      redirect(302, "https://" + prevWebsite);
    case "random":
      redirect(302, "https://" + randWebsite);
    default:
      redirect(302, "/webring")
  }
}