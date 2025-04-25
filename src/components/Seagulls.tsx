import React, { useEffect, useState } from 'react';
import '../styles/Seagulls.css';

const Seagulls: React.FC = () => {
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const seagulls = document.querySelectorAll('.seagull');
        seagulls.forEach(seagull => {
            const randomDelay = Math.random() * 5;
            (seagull as HTMLElement).style.animationDelay = `${randomDelay}s`;
        });
    }, []);

    return (
        <div className="seagulls-container">
            <div
                className={`seagull seagull--1 ${hovering ? 'hovering' : ''}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
            <div className="seagull seagull--2">
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
            <div className="seagull seagull--3">
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
            <div className="seagull seagull--4">
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
            <div className="seagull seagull--5">
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
            <div className="seagull seagull--6">
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
            <div className="seagull seagull--7">
                <div className="seagull-tail"></div>
                <div className="seagull-body"></div>
                <div className="seagull-head">
                    <div className="seagull-beak"></div>
                </div>
                <div className="seagull-wing left"></div>
                <div className="seagull-wing right"></div>
            </div>
        </div>
    );
};

export default Seagulls;