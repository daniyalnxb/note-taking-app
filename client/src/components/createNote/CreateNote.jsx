import React from 'react';

import './create-note.style.scss';

import Button from '@/components/button/Button';

import TagIcon from '@/assets/icons/tag.svg';
import ClockIcon from '@/assets/icons/circle-clock.svg';

const CreateNote = () => {
  return (
    <div className="create-note">
        <div className="create-note__note-title">
            <input placeholder="Enter a title..." />
        </div>
        <div className="create-note__tags-container">
            <div className="tag-item">
                <div className="title">
                    <TagIcon />
                    <p className="title-text">Tags</p>
                </div>
                <div className="description">
                    <input placeholder="Add tags separated by commas (e.g. Work, Planning)" />
                </div>
            </div>
            <div className="tag-item">
                <div className="title">
                    <ClockIcon />
                    <p className="title-text">Last edited</p>
                </div>
                <div className="description">
                    <p>Not yet saved</p>
                </div>
            </div>
        </div>
        <div className="create-note__note-editor">
            <textarea placeholder="Start typing your note here…" />
        </div>
        <div className="buttons-container">
            <Button>Save Note</Button>
            <Button type="secondary">Cancel</Button>
        </div>
    </div>
  );
};

export default CreateNote;
