import React from 'react';
import { motion } from 'framer-motion';
import '../styles/FamilyMember.css';

const FamilyMember = ({ member, onClick, onEdit, isLarge = false }) => {
  const getLifespan = (birthDate, deathDate) => {
    return deathDate ? `${birthDate} - ${deathDate} 🪦` : `${birthDate}`;
  };

  const getProfessionIcon = (profession) => {
    const professionIcons = {
      'Engenheiro': '🏗️',
      'Professora': '📚',
      'Desenvolvedor': '💻',
      'Médico': '👨‍⚕️',
      'Advogado': '⚖️',
      'Arquiteto': '🏛️',
      'Estudante': '🎒',
      'Bebê': '👶',
    };
    return professionIcons[profession] || '💼';
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(member);
  };

  return (
    <motion.div 
      className={`family-member ${isLarge ? 'large' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      id={`member-${member.id}`}
    >
      <img src={`/images/${member.image}`} alt={member.name} className="member-image" />
      <h3 className="member-name">{member.name}</h3>
      {isLarge && (
        <div className="member-details">
          <p>{getLifespan(member.birthDate, member.deathDate)}</p>
          <p>{getProfessionIcon(member.profession)} {member.profession}</p>
          <p>{member.gender === 'male' ? '♂️' : '♀️'}</p>
          <button onClick={handleEdit} className="edit-button">
            ✏️ Editar
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default FamilyMember;