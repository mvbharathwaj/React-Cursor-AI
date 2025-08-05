import React, { useState } from 'react';
import styles from './UserProfile.module.css';

/**
 * UserProfile component for displaying and editing user information.
 * @returns {JSX.Element} The rendered UserProfile component.
 */
function UserProfile() {
  const [user, setUser] = useState({
    name: 'Bharathwaj',
    email: 'bharathwaj@example.com',
    role: 'Developer',
    location: 'India',
    bio: 'Passionate developer exploring React and AI technologies.'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  /**
   * Enables edit mode for the user profile.
   * @returns {void}
   */
  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...user });
  };

  /**
   * Saves the edited user profile data.
   * @returns {void}
   */
  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  /**
   * Cancels editing and resets the form data.
   * @returns {void}
   */
  const handleCancel = () => {
    setEditData({ ...user });
    setIsEditing(false);
  };

  /**
   * Handles changes to the user profile form fields.
   * @param {string} field - The field being changed.
   * @param {string} value - The new value for the field.
   * @returns {void}
   */
  const handleChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.userProfile}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}>
          <span>{user.name.charAt(0).toUpperCase()}</span>
        </div>
        <h2>{user.name}</h2>
        <p className={styles.role}>{user.role}</p>
      </div>

      <div className={styles.profileContent}>
        {isEditing ? (
          <div className={styles.editForm}>
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                value={editData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Role:</label>
              <input
                type="text"
                value={editData.role}
                onChange={(e) => handleChange('role', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Location:</label>
              <input
                type="text"
                value={editData.location}
                onChange={(e) => handleChange('location', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Bio:</label>
              <textarea
                value={editData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                rows="3"
              />
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={handleSave} className={styles.saveBtn}>Save</button>
              <button onClick={handleCancel} className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className={styles.profileInfo}>
            <div className={styles.infoItem}>
              <strong>Email:</strong> {user.email}
            </div>
            <div className={styles.infoItem}>
              <strong>Location:</strong> {user.location}
            </div>
            <div className={styles.infoItem}>
              <strong>Bio:</strong> {user.bio}
            </div>
            <button onClick={handleEdit} className={styles.editBtn}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile; 