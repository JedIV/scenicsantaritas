import petitionContent from '../content/petition.json';
import eventsContent from '../content/events.json';
import campaignsContent from '../content/campaigns.json';

const newsModules = import.meta.glob('../content/news/*.json', { eager: true });

const newsArticles = Object.values(newsModules).map((module) => module.default ?? module);

export { newsArticles, eventsContent, petitionContent, campaignsContent };
