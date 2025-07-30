import React, { useEffect, useState, useRef } from 'react';
import './Content.css';

const Counter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // Start when 30% is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 1000;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
  };

  return (
    <p ref={counterRef} className="z1" style={{ margin: '4px 0', lineHeight: '1.2' }}>
      {count}
      {suffix}
    </p>
  );
};



const ImpactStats = () => {
  return (
    <div className="bxs" >
        
      
      <div className="bxx1">
        <Counter target={20} />
        <p className="z2" >THOUSAND</p>
        <p className="z3" >children and</p>
        <p className="z3" >their families are</p>
        <p className="z3" >impacted every year</p>
      </div>

      <div className="bxx1">
        <Counter target={2000} />
        <p className="z2">VILLAGES</p>
        <p className="z3" >and slums</p>
        <p className="z3" >are reached out</p>
        <p className="z3">to across the country</p>
      </div>

      <div className="bxx1">
        <Counter target={400} />
        <p className="z2">PROJECTS</p>
        <p className="z3" >focused on</p>
        <p className="z3">education, healthcare,</p>
        <p className="z3" >and women empowerment</p>
      </div>

      <div className="bxx1">
        <Counter target={27} />
        <p className="z2" >STATES</p>
        <p className="z3">are reached</p>
        <p className="z3">including the</p>
        <p className="z3" >remotest areas</p>
      </div>
      
    </div>
  );
};

export default ImpactStats;
