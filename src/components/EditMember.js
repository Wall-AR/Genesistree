import React, { useState } from 'react';
import '../styles/EditMember.css';

const EditMember = ({ member, onSave, onCancel }) => {
  const [editedMember, setEditedMember] = useState({ ...member });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMember(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedMember);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-member-form">
      <input
        name="name"
        value={editedMember.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        name="birthDate"
        value={editedMember.birthDate}
        onChange={handleChange}
        placeholder="Data de Nascimento"
      />
      <input
        name="profession"
        value={editedMember.profession}
        onChange={handleChange}
        placeholder="Profissão"
      />
      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditMember;