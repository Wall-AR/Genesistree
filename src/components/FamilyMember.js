import React from 'react';
import '../styles/FamilyMember.css';

const FamilyMember = ({ member, onClick, isLarge = false }) => {
  return (
    <div 
      className={`family-member ${isLarge ? 'large' : ''}`}
      onClick={onClick}
    >
      <img src={`/images/${member.image}`} alt={member.name} className="member-image" />
      <div className="member-info">
        <h3>{member.name}</h3>
        {isLarge && (
          <>
            <p>Data de Nascimento: {member.birthDate}</p>
            <p>Profissão: {member.profession}</p>
            {member.deathDate && <p>Data de Falecimento: {member.deathDate}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default FamilyMember;