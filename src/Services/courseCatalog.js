export const allBundleCourseNames = [
    'Amazon Wholesale',
    'Thumbnail Designing',
    'Mastering Prompt Engineering for AI Tools',
    'AI Chatbot',
    'Financial Managment',
    'YouTube Marketing',
    'SEO',
    'Facebook Marketing',
    'Digital Marketing With Ai',
    'Shopify',
    'Google Ads',
    'Video Editing',
    'Fiverr Freelancing',
    'Mass Media',
    'Graphic Designing',
    'Ms Office',
    'Tiktok shop complete course',
    'Mastering Daraz by Jzarr',
    'Amazon Private Label',
    'Mastering eBay From Product Hunting to Sales Success',
    'Dropshipping',
    'Web Developer(Frontend)',
    'Web Developer',
    'Crypto spot Trading'
];

const hiddenCourseNames = new Set([
    'thumbnail designing',
    'thumbnail desingning',
    'financial managment',
    'graphic designing',
    'video editing',
    'ms office',
    'web developer(frontend)',
    'web developer',
    'frontend',
    'crypto spot trading',
    'mastering ebay from product hunting to sales success'
]);

export function normalizeCourseName(courseName = '') {
    return String(courseName).toLowerCase().replace(/\s+/g, ' ').trim();
}

export function isCourseVisible(courseName = '') {
    return !hiddenCourseNames.has(normalizeCourseName(courseName));
}

export function filterVisibleCourses(courses = []) {
    return courses.filter((course) => {
        const courseName = typeof course === 'string' ? course : course?.coursename;
        return isCourseVisible(courseName);
    });
}

export const visibleBundleCourseNames = filterVisibleCourses(allBundleCourseNames);
export const visibleBundleCourseCount = visibleBundleCourseNames.length;
