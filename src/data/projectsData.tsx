import { Project } from './types'

/**
 * The points are the source of truth and are worded as on the resume (public/resume.pdf).
 * `description` is built from them, so the two cannot drift apart.
 */
const withDescription = (project: Omit<Project, 'description'>): Project => ({
    ...project,
    description: project.points.join(' '),
})

const projectsData: Project[] = [
    {
        name: 'ML Model API',
        points: [
            'A FastAPI service serving a scikit-learn spam classifier (TF-IDF + MLPClassifier, tuned via RandomizedSearchCV) on the UCI SMS Spam Dataset.',
            'Implemented API key auth (Argon2id) and SQLAlchemy for secure, tracked model inference requests.',
        ],
        tags: ['Python', 'FastAPI', 'Scikit-learn', 'SQLAlchemy', 'REST API', 'Machine Learning'],
        // Placeholder: borrows the eBay scraper picture until this project has its own screenshot.
        image: 'ebay-scraper.png',
        // The resume links this project to the eBay repo (a typo). This is the real repo.
        link: 'https://github.com/applejuice8/ml-model-api',
        featured: true,
    },
    {
        name: 'Spam Classifier',
        points: [
            'Trained a spam classification model in scikit-learn using RandomizedSearchCV to tune hyperparameters across CountVectorizer and TF-IDF pipelines with multiple classifiers.',
            'Identified MLPClassifier as the top performer with both vectorizers, achieving ~97.5% accuracy on the Kaggle Spam Email Dataset.',
        ],
        tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Classification'],
        image: 'spam-classifier.jpeg',
        link: 'https://github.com/applejuice8/spam-classifier',
        featured: true,
    },
    {
        name: 'eBay Scraper',
        points: [
            'A Flask REST API with 4 interchangeable scraping backends in Python (Selenium, Playwright, Beautiful Soup) to extract and clean eBay product data.',
            'Built a Bootstrap UI to demo the API and display scraping results.',
        ],
        tags: ['Python', 'Flask', 'Bootstrap', 'Selenium', 'Playwright', 'Beautiful Soup', 'REST API', 'Web Scraping'],
        image: 'ebay-scraper.png',
        link: 'https://github.com/applejuice8/ebay-scraper',
        featured: true,
    },
].map(withDescription)

export default projectsData
