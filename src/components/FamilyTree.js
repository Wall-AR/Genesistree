import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FamilyMember from './FamilyMember';
import EditMember from './EditMember';
import familyData from '../data/familyData';
import '../styles/FamilyTree.css';

const FamilyTree = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [focusedMember, setFocusedMember] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [zoom, setZoom] = useState(1);
  const treeRef = useRef(null);

  const handleMemberClick = (member) => {
    if (selectedMember === member) {
      setFocusedMember(member);
    } else {
      setSelectedMember(member);
      setZoom(1.5);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
  };

  const handleSave = (editedMember) => {
    const updatedMembers = familyData.members.map(member =>
      member.id === editedMember.id ? editedMember : member
    );
    familyData.members = updatedMembers;
    setEditingMember(null);
    setSelectedMember(editedMember);
  };

  const handleCancel = () => {
    setEditingMember(null);
  };

  const handleReset = () => {
    setSelectedMember(null);
    setFocusedMember(null);
    setZoom(1);
  };

  useEffect(() => {
    if (selectedMember && treeRef.current) {
      const element = document.getElementById(`member-${selectedMember.id}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }
    }
  }, [selectedMember]);

  const renderFamilyMember = (member, isRoot = false) => {
    const children = familyData.members.filter(m => m.parentIds.includes(member.id));
    const spouse = familyData.members.find(m => m.id === member.spouseId);
    const isSelected = selectedMember && (selectedMember.id === member.id || selectedMember.id === spouse?.id);

    return (
      <motion.div 
        className={`family-node ${isSelected ? 'selected' : ''} ${isRoot ? 'root' : ''}`}
        key={member.id}
        animate={{ scale: isSelected ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="member-container">
          <FamilyMember
            member={member}
            isLarge={isSelected}
            onClick={() => handleMemberClick(member)}
            onEdit={handleEdit}
          />
          {spouse && (
            <FamilyMember
              member={spouse}
              isLarge={isSelected}
              onClick={() => handleMemberClick(spouse)}
              onEdit={handleEdit}
            />
          )}
        </div>
        {children.length > 0 && (
          <div className={`children-container ${isSelected ? 'expanded' : ''}`}>
            {children.map(child => renderFamilyMember(child))}
          </div>
        )}
      </motion.div>
    );
  };

  const rootMember = familyData.members.find(m => m.parentIds.length === 0);

  return (
    <div className="family-tree" ref={treeRef}>
      <button className="reset-button" onClick={handleReset}>
        Voltar para Árvore Completa
      </button>
      <motion.div 
        className="tree-container"
        animate={{ scale: zoom }}
        transition={{ duration: 0.5 }}
      >
        {renderFamilyMember(rootMember, true)}
      </motion.div>
      <AnimatePresence>
        {focusedMember && (
          <motion.div
            className="focused-member"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>{focusedMember.name}</h2>
            <p>Data de Nascimento: {focusedMember.birthDate}</p>
            <p>Profissão: {focusedMember.profession}</p>
            {/* Adicione mais detalhes aqui */}
            <button onClick={() => setFocusedMember(null)}>Voltar para a Árvore</button>
          </motion.div>
        )}
      </AnimatePresence>
      {editingMember && (
        <EditMember
          member={editingMember}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default FamilyTree;