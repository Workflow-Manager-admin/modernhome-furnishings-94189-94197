import React from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * MainContainer is the primary layout component for the ModernHome Furnishings online store.
 * It establishes the foundational structure, branding, and page sections: navigation and main content.
 */
function MainContainer() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {/* Brand Logo */}
            <div className="logo">
              <span className="logo-symbol" role="img" aria-label="furniture">⌂</span>{" "}
              ModernHome <span style={{ fontWeight: 400 }}>Furnishings</span>
            </div>
            {/* Navigation buttons (stub for future links like Cart, Account, etc.) */}
            <div>
              <button className="btn" style={{ marginRight: 10 }}>Shop</button>
              <button className="btn">Cart</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">
              Modern design, affordable pricing.
            </div>
            <h1 className="title">
              Elevate Your Living Space
            </h1>
            <div className="description">
              Discover a wide range of high-quality living room, bedroom, dining, and office furniture
              with sleek modern designs—delivered directly to your home at prices you'll love.
            </div>
            <button className="btn btn-large" style={{marginTop: 16}}>
              Explore Collection
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainContainer;