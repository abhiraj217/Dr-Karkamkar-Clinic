import React, { useState, useRef, useEffect } from "react";

/**
 * TabsPill Component
 * sections = [
 *   { id, tabTitle, type: "text", content: `...` }
 *   { id, tabTitle, type: "images", images: [{ img, caption }] }
 * ]
 */
const TabsPill = ({ sections = [] }) => {

  // ----- Safe initial active tab -----
  const [active, setActive] = useState(sections[0]?.id || "");
  const tabListRef = useRef(null);

  // Reset active tab when sections change
  useEffect(() => {
    setActive(sections[0]?.id || "");
  }, [sections]);

  // Auto-scroll active tab into view
  useEffect(() => {
    const el = tabListRef.current?.querySelector(`[data-tab="${active}"]`);
    if (el?.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  // Render section content
  const renderContent = (section) => {
    if (!section) return null;

    if (section.type === "text") {
      return (
        <div
          className="tab-content"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      );
    }

    if (section.type === "images") {
      return (
        <div className="tab-content images-grid">
          {section.images?.map((im, i) => (
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

      {/* ----------- TAB HEADERS ----------- */}
      <div className="tabs-pill-list" role="tablist" ref={tabListRef}>
        {sections.map((s) => (
          <button
            key={s.id}
            data-tab={s.id}
            role="tab"
            aria-selected={active === s.id}
            className={`tab-pill ${active === s.id ? "active" : ""}`}
            onClick={() => setActive(s.id)}

            // ----- Keyboard Navigation -----
            onKeyDown={(e) => {
              const idx = sections.findIndex((sec) => sec.id === s.id);

              if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                e.preventDefault();
                const prev = sections[(idx - 1 + sections.length) % sections.length];
                setActive(prev.id);
              }

              if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                e.preventDefault();
                const next = sections[(idx + 1) % sections.length];
                setActive(next.id);
              }
            }}
          >
            {s.tabTitle}
          </button>
        ))}
      </div>

      {/* ----------- TAB CONTENT ----------- */}
      <div className="tabs-pill-content" role="tabpanel">
        {renderContent(activeSection)}
      </div>

    </div>
  );
};

export default TabsPill;
