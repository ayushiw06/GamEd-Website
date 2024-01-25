import React from 'react';
import { Link } from 'react-router-dom';
import './PhysicsSummaryComponent.css';

const PhysicsSummaryComponent = () => {
  return (
    <div className="physics-summary">
      <h1 className="title">Newton's Laws of Motion</h1>
      <p className="summary">
        Sir Isaac Newton formulated three fundamental laws that describe the relationship between a body and the forces acting upon it. These laws are the foundation of classical mechanics and continue to be fundamental principles in physics. Here is a brief summary of Newton's three laws:

        1. <strong>First Law (Law of Inertia):</strong> An object at rest tends to stay at rest, and an object in motion tends to stay in motion with the same speed and in the same direction unless acted upon by an unbalanced external force.

        2. <strong>Second Law (Law of Acceleration):</strong> The force acting on an object is equal to the mass of the object times its acceleration. This is described by the equation F = ma.

        3. <strong>Third Law (Action-Reaction):</strong> For every action, there is an equal and opposite reaction. When one body exerts a force on a second body, the second body exerts a force of equal magnitude in the opposite direction on the first body.
      </p>
      <Link to="/topic/resources" className="go-back-button">Go Back</Link>
    </div>
  );
};

export default PhysicsSummaryComponent;
