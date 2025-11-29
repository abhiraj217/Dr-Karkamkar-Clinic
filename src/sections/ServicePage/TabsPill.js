import React, { useState, useRef, useEffect } from "react";

/**
 * TabsPill
 * props:
 *   sections: [{ id, tabTitle, type, content, images? }]
 */
const TabsPill = ({ sections }) => {
  const [active, setActive] = useState(sections[0]?.id || "");
  const tabListRef = useRef(null);

  useEffect(() => {
    setActive(sections[0]?.id || "");
  }, [sections]);

  // ensure active tab is visible (scroll into view in tab list)
  useEffect(() => {
    const el = tabListRef.current?.querySelector(`[data-tab="${active}"]`);
    if (el?.scrollIntoView) {
      // center it nicely if possible
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  const renderContent = (section) => {
    if (!section) return null;
    if (section.type === "text") {
      return <div className="tab-content" dangerouslySetInnerHTML={{ __html: section.content }} />;
    }
    if (section.type === "images") {
      return (
        <div className="tab-content images-grid">
          {section.images.map((im, i) => (
            <div className="img-card" key={i}>
              <img src={im.img} alt={im.caption || `img-${i}`} />
              {im.caption && <p className="img-caption">{im.caption}</p>}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const activeSection = sections.find((s) => s.id === active) || sections[0];

  return (
    <div className="tabs-pill-wrapper">
      <div className="tabs-pill-list" role="tablist" ref={tabListRef}>
        {sections.map((s) => (
          <button
            key={s.id}
            data-tab={s.id}
            role="tab"
            aria-selected={active === s.id}
            className={`tab-pill ${active === s.id ? "active" : ""}`}
            onClick={() => setActive(s.id)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                e.preventDefault();
                const idx = sections.findIndex((x) => x.id === s.id);
                const prev = sections[(idx - 1 + sections.length) % sections.length];
                setActive(prev.id);
              } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                e.preventDefault();
                const idx = sections.findIndex((x) => x.id === s.id);
                const next = sections[(idx + 1) % sections.length];
                setActive(next.id);
              }
            }}
          >
            {s.tabTitle}
          </button>
        ))}
      </div>

      <div className="tabs-pill-content" role="tabpanel">
        {renderContent(activeSection)}
      </div>
    </div>
  );
};

export default TabsPill;
