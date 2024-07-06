import React, { useState } from 'react';
import FamilyMember from './FamilyMember';
import familyData from '../data/familyData';
import '../styles/FamilyTree.css';

const FamilyTree = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showSpouse, setShowSpouse] = useState(true);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setShowSpouse(true);
  };

  const handleSpouseToggle = () => {
    setShowSpouse(!showSpouse);
  };

  const renderFamilyTree = () => {
    if (!selectedMember) {
      return (
        <div className="family-grid">
          {familyData.members.map((member) => (
            <FamilyMember
              key={member.id}
              member={member}
              onClick={() => handleMemberClick(member)}
            />
          ))}
        </div>
      );
    }

    const spouse = familyData.members.find(m => m.id === selectedMember.spouseId);
    const children = familyData.members.filter(m => 
      m.parentIds.includes(selectedMember.id) || (spouse && m.parentIds.includes(spouse.id))
    );

    return (
      <div className="selected-family">
        <div className="parent-container">
          <FamilyMember
            member={selectedMember}
            isLarge={true}
            onClick={handleSpouseToggle}
          />
          {showSpouse && spouse && (
            <FamilyMember
              member={spouse}
              isLarge={true}
              onClick={handleSpouseToggle}
            />
          )}
        </div>
        {children.length > 0 && (
          <div className="children-container">
            {children.map((child) => (
              <FamilyMember
                key={child.id}
                member={child}
                onClick={() => handleMemberClick(child)}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="family-tree">
      <button className="reset-button" onClick={() => setSelectedMember(null)}>
        Voltar para Árvore Completa
      </button>
      {renderFamilyTree()}
    </div>
  );
};

export default FamilyTree;