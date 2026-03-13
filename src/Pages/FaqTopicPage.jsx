import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import ScrollToTop from '../Component/ScrollTop/ScrollTop';
import {
    faqCategories,
    getFaqTopicBySlug,
    getRelatedFaqTopics
} from '../data/faqTopics';
import './faqs.css';

function FaqTopicPage() {
    const { topicSlug } = useParams();
    const [openIndex, setOpenIndex] = useState(0);

    const topic = getFaqTopicBySlug(topicSlug);

    useEffect(() => {
        setOpenIndex(0);
    }, [topicSlug]);

    if (!topic) {
        return <Navigate to="/faqs" replace />;
    }

    const category = faqCategories.find((item) => item.key === topic.category);
    const relatedTopics = getRelatedFaqTopics(topic.slug);
    const sidebarTopics = relatedTopics.length > 0
        ? relatedTopics
        : faqCategories
            .flatMap((item) => item.topics)
            .filter((item) => item.slug !== topic.slug)
            .slice(0, 8);

    return (
        <>
            <ScrollToTop />
            <div className="faq-center-page">
                <div className="container py-5">
                    <section className="faq-topic-hero">
                        <div className="faq-topic-breadcrumbs">
                            <Link to="/faqs">Support - Guides - FAQs</Link>
                            <span>/</span>
                            <span>{topic.title}</span>
                        </div>
                        <div className="faq-topic-hero-top">
                            <span className="faq-topic-hero-badge">{topic.badge}</span>
                            <span className="faq-topic-hero-count">
                                {topic.questionCount} questions
                            </span>
                        </div>
                        <h1>{topic.title}</h1>
                        <p>{topic.description}</p>
                    </section>

                    <div className="faq-topic-layout">
                        <section className="faq-topic-main">
                            <div className="faq-topic-panel-head">
                                <h2>{topic.title} FAQs</h2>
                                <span>{topic.questionCount} questions</span>
                            </div>

                            <div className="faq-topic-accordion">
                                {topic.faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <article
                                            key={faq.question}
                                            className={`faq-topic-item${isOpen ? ' is-open' : ''}`}
                                        >
                                            <button
                                                type="button"
                                                className="faq-topic-question"
                                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                            >
                                                <span className="faq-topic-question-text">
                                                    {faq.question}
                                                </span>
                                                <span className="faq-topic-question-meta">
                                                    <span className="faq-topic-question-badge">
                                                        {topic.badge}
                                                    </span>
                                                    <span className="faq-topic-question-toggle">
                                                        {isOpen ? '-' : '+'}
                                                    </span>
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="faq-topic-answer">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        <aside className="faq-topic-sidebar">
                            <div className="faq-topic-sidebar-card">
                                <h3>Related FAQ Pages</h3>
                                <p>
                                    {category
                                        ? `More topics in ${category.label}.`
                                        : 'Browse more topic-wise FAQ pages.'}
                                </p>

                                <div className="faq-topic-sidebar-links">
                                    {sidebarTopics.map((item) => (
                                        <Link
                                            key={item.slug}
                                            to={`/faqs/${item.slug}`}
                                            className="faq-topic-sidebar-link"
                                        >
                                            <span>{item.title}</span>
                                            <span>{item.badge}</span>
                                        </Link>
                                    ))}
                                </div>

                                <Link to="/faqs" className="faq-topic-sidebar-all">
                                    Browse all topics
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqTopicPage
