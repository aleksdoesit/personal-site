import { useId, useState } from 'react';
import { PROFESSIONAL_ENGAGEMENTS } from '../data/professionalWork';

export function ProfessionalWorkSection() {
    const baseId = useId();
    const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

    const toggle = (id: string) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    return (
        <section id="professional" className="professionalWork sectionContainer">
            <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
                Professional Work
            </h2>

            <ul className="professionalWork-list" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                {PROFESSIONAL_ENGAGEMENTS.map((eng) => {
                    const isOpen = openIds.has(eng.id);
                    const panelId = `${baseId}-${eng.id}-panel`;
                    const headerId = `${baseId}-${eng.id}-header`;

                    return (
                        <li
                            key={eng.id}
                            className={`professionalWork-item${isOpen ? ' professionalWork-item--open' : ''}`}
                        >
                            <button
                                type="button"
                                id={headerId}
                                className="professionalWork-header"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => toggle(eng.id)}
                            >
                                <div className="professionalWork-headerText">
                                    <h3 className="professionalWork-title">{eng.title}</h3>
                                    <p className="professionalWork-owner">{eng.owner}</p>
                                    <p className="professionalWork-dates">{eng.dateRange}</p>
                                </div>
                                <span className="professionalWork-chevron" aria-hidden>
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </button>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={headerId}
                                className="professionalWork-panel"
                            >
                                <div className="professionalWork-panelInner" inert={!isOpen ? true : undefined}>
                                    <ul className="professionalWork-bullets">
                                        {eng.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                    <div className="professionalWork-stack">
                                        <span className="professionalWork-stackLabel">Technical stack</span>
                                        <ul className="professionalWork-stackList">
                                            {eng.stack.map((tech) => (
                                                <li key={tech}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
