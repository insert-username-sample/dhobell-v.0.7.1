import React, { useState, useEffect } from 'react';
import './WebView.css';

function WebView({ url, title }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setError('URL is required');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
  }, [url]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError('Failed to load content');
    setLoading(false);
  };

  return (
    <div className="webview-container">
      {title && <h2 className="webview-title">{title}</h2>}
      <div className="webview-frame">
        {loading && <div className="webview-loading">Loading...</div>}
        {error && <div className="webview-error">{error}</div>}
        {url && (
          <iframe
            src={url}
            title={title || 'WebView Content'}
            className="webview-iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );

}

export default WebView;