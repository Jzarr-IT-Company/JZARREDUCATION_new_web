const rawFaqFiles = import.meta.glob('../content/faqs/*.txt', {
    eager: true,
    import: 'default',
    query: '?raw'
});

const categoryInfo = {
    general: {
        label: 'General Support',
        badge: 'Support',
        description: 'Admissions, payments, student support, classes, and institute basics.'
    },
    amazon: {
        label: 'Amazon',
        badge: 'Amazon',
        description: 'Seller setup, FBA, listings, sourcing, PPC, and Amazon workflows.'
    },
    etsy: {
        label: 'Etsy',
        badge: 'Etsy',
        description: 'Shop setup, digital products, SEO, product research, and order handling.'
    },
    shopify: {
        label: 'Shopify',
        badge: 'Shopify',
        description: 'Store setup, listings, payments, marketing, scaling, and dropshipping.'
    },
    seo: {
        label: 'SEO',
        badge: 'SEO',
        description: 'SEO foundations, on-page, off-page, technical SEO, analytics, and keywords.'
    },
    metaAds: {
        label: 'Meta Ads',
        badge: 'Meta',
        description: 'Meta ads setup, strategy, optimization, and campaign scaling.'
    },
    linkedin: {
        label: 'LinkedIn',
        badge: 'LinkedIn',
        description: 'Lead generation, profile optimization, and client hunting on LinkedIn.'
    },
    upwork: {
        label: 'Upwork',
        badge: 'Upwork',
        description: 'Profiles, proposals, interviews, client communication, and long-term strategy.'
    },
    wordpress: {
        label: 'WordPress',
        badge: 'WordPress',
        description: 'WordPress basics, setup, themes, plugins, and SEO optimization.'
    },
    ecommerceAi: {
        label: 'E-Commerce and AI',
        badge: 'E-Commerce',
        description: 'AI tools, e-commerce strategy, ads, and selling systems.'
    }
};

const categoryOrder = [
    'general',
    'amazon',
    'etsy',
    'shopify',
    'seo',
    'metaAds',
    'linkedin',
    'upwork',
    'wordpress',
    'ecommerceAi'
];

function normalizeText(text = '') {
    return String(text)
        .replace(/\r/g, '')
        .replace(/[\u00a0]/g, ' ')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201c\u201d]/g, '"')
        .replace(/[\u2013\u2014]/g, '-')
        .trim();
}

function slugify(value = '') {
    return value
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function cleanTitle(fileName = '') {
    return fileName
        .replace(/\.txt$/i, '')
        .replace(/\s*FAQs$/i, '')
        .trim();
}

function detectCategory(title) {
    if (title.startsWith('Amazon ')) return 'amazon';
    if (title.startsWith('Etsy ')) return 'etsy';
    if (title.startsWith('Shopify ')) return 'shopify';
    if (title.startsWith('Meta Ads ')) return 'metaAds';
    if (title.startsWith('LinkedIn ')) return 'linkedin';
    if (title.startsWith('Upwork ')) return 'upwork';
    if (title.startsWith('WordPress ')) return 'wordpress';

    if (
        title.includes('SEO') ||
        title === 'Keyword Research' ||
        title === 'Content SEO & Blogging' ||
        title === 'On-Page SEO' ||
        title === 'Off-Page SEO & Link Building' ||
        title === 'Local SEO' ||
        title === 'Technical SEO'
    ) {
        return 'seo';
    }

    if (
        title === 'Basic AI Tools for E-Commerce' ||
        title === 'E-commerce Ads' ||
        title === 'E-commerce SEO'
    ) {
        return 'ecommerceAi';
    }

    return 'general';
}

function parseFaqText(rawText) {
    const blocks = normalizeText(rawText)
        .split(/\n\s*\n+/)
        .map((block) => block.trim())
        .filter(Boolean);

    const faqs = [];

    for (let index = 0; index < blocks.length; index += 2) {
        const question = blocks[index]?.replace(/^\d+\.\s*/, '').trim();
        const answer = blocks[index + 1]?.replace(/\n+/g, ' ').trim();

        if (question && answer) {
            faqs.push({ question, answer });
        }
    }

    return faqs;
}

function makeDescription(title, faqs) {
    const fallback = `Browse frequently asked questions about ${title}.`;
    const firstAnswer = faqs[0]?.answer?.replace(/\s+/g, ' ').trim() || fallback;

    if (firstAnswer.length <= 136) {
        return firstAnswer;
    }

    return `${firstAnswer.slice(0, 133).trim()}...`;
}

function topicSort(left, right) {
    const leftCategory = categoryOrder.indexOf(left.category);
    const rightCategory = categoryOrder.indexOf(right.category);

    if (leftCategory !== rightCategory) {
        return leftCategory - rightCategory;
    }

    return left.title.localeCompare(right.title);
}

export const faqTopics = Object.entries(rawFaqFiles)
    .map(([path, rawText]) => {
        const fileName = path.split('/').pop() || '';
        const title = cleanTitle(fileName);
        const category = detectCategory(title);
        const faqs = parseFaqText(rawText);

        return {
            title,
            slug: slugify(title),
            fileName,
            category,
            badge: categoryInfo[category].badge,
            categoryLabel: categoryInfo[category].label,
            description: makeDescription(title, faqs),
            questionCount: faqs.length,
            faqs
        };
    })
    .sort(topicSort);

export const faqCategories = categoryOrder
    .map((key) => ({
        key,
        ...categoryInfo[key],
        topics: faqTopics.filter((topic) => topic.category === key)
    }))
    .filter((category) => category.topics.length > 0);

export function getFaqTopicBySlug(slug) {
    return faqTopics.find((topic) => topic.slug === slug);
}

export function getRelatedFaqTopics(slug) {
    const currentTopic = getFaqTopicBySlug(slug);

    if (!currentTopic) {
        return [];
    }

    return faqTopics.filter(
        (topic) => topic.category === currentTopic.category && topic.slug !== slug
    );
}
