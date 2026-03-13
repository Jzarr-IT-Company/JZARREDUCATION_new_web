import React from 'react'
import { Link } from 'react-router-dom';
import ScrollToTop from '../Component/ScrollTop/ScrollTop';
import { faqCategories } from '../data/faqTopics';
import './faqs.css';

function FAQS() {
    return (
        <>
            <ScrollToTop />
            <div className="faq-center-page">
                <div className="container py-5">
                    <section className="faq-center-hero">
                        <div className="faq-center-hero-copy">
                            <span className="faq-center-label">Support - Guides - FAQs</span>
                            <h1>Popular FAQ Topics</h1>
                            <p>
                                Explore topic-wise help pages for enrollment, payments, Amazon,
                                Shopify, Etsy, SEO, Upwork, WordPress, and more. Each topic opens
                                into its own FAQ detail page with accordion answers.
                            </p>
                        </div>
                    </section>

                    <nav className="faq-center-category-nav" aria-label="Browse categories">
                        {faqCategories.map((category) => (
                            <a
                                key={category.key}
                                className="faq-center-category-chip"
                                href={`#faq-category-${category.key}`}
                            >
                                {category.label}
                            </a>
                        ))}
                    </nav>

                    {faqCategories.map((category) => (
                        <section
                            key={category.key}
                            id={`faq-category-${category.key}`}
                            className="faq-center-section"
                        >
                            <div className="faq-center-section-head">
                                <div>
                                    <span className="faq-center-section-badge">{category.badge}</span>
                                    <h2>{category.label}</h2>
                                    <p>{category.description}</p>
                                </div>
                            </div>

                            <div className="faq-center-grid">
                                {category.topics.map((topic) => (
                                    <Link
                                        key={topic.slug}
                                        to={`/faqs/${topic.slug}`}
                                        className="faq-topic-card"
                                    >
                                        <div className="faq-topic-card-top">
                                            <span className="faq-topic-card-badge">{topic.badge}</span>
                                        </div>
                                        <h3>{topic.title}</h3>
                                        <p>{topic.description}</p>
                                        <span className="faq-topic-card-link">Open topic</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQS
