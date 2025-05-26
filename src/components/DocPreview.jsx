// src/components/DocPreview.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/components/DocPreview.css';

export default function DocPreview({
  embedUrl,
  viewUrl,
  title,
  subtitle,
  showOpenButton = true,   // new prop, default true
}) {
  const openFull = e => {
    e.stopPropagation();
    window.open(viewUrl, '_blank');
  };

  return (
    <div className="doc-preview">
      <div className="doc-preview__embed">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
          title={title}
        />

        {/* only render our button if showOpenButton is true */}
        {showOpenButton && (
          <button
            className="doc-preview__open-btn"
            onClick={openFull}
            aria-label={`Open full ${title}`}
          >
            <FaExternalLinkAlt />
          </button>
        )}
      </div>

      <div className="doc-preview__caption">
        <strong>{title}</strong>
        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  );
}

DocPreview.propTypes = {
  embedUrl:       PropTypes.string.isRequired,
  viewUrl:        PropTypes.string.isRequired,
  title:          PropTypes.string.isRequired,
  subtitle:       PropTypes.string,
  showOpenButton: PropTypes.bool,
};
