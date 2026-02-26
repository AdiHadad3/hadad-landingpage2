import { useState, useEffect, useCallback } from 'react';
import { Accessibility, X, Plus, Minus, Eye, Type, Link2, MousePointer, MonitorOff, Scaling, AlignCenter, Palette, LetterText } from 'lucide-react';

interface A11yState {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
  stopAnimations: boolean;
  grayscale: boolean;
  textSpacing: boolean;
  readableFont: boolean;
  invertColors: boolean;
}

const defaults: A11yState = {
  fontSize: 100,
  highContrast: false,
  highlightLinks: false,
  bigCursor: false,
  stopAnimations: false,
  grayscale: false,
  textSpacing: false,
  readableFont: false,
  invertColors: false,
};

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(() => {
    try {
      const saved = localStorage.getItem('a11y');
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch {
      return defaults;
    }
  });

  const apply = useCallback((s: A11yState) => {
    const root = document.documentElement;
    root.style.fontSize = `${s.fontSize}%`;
    root.classList.toggle('a11y-high-contrast', s.highContrast);
    root.classList.toggle('a11y-highlight-links', s.highlightLinks);
    root.classList.toggle('a11y-big-cursor', s.bigCursor);
    root.classList.toggle('a11y-stop-animations', s.stopAnimations);
    root.classList.toggle('a11y-grayscale', s.grayscale);
    root.classList.toggle('a11y-text-spacing', s.textSpacing);
    root.classList.toggle('a11y-readable-font', s.readableFont);
    root.classList.toggle('a11y-invert-colors', s.invertColors);
  }, []);

  useEffect(() => {
    apply(state);
    localStorage.setItem('a11y', JSON.stringify(state));
  }, [state, apply]);

  const update = (patch: Partial<A11yState>) =>
    setState((prev) => ({ ...prev, ...patch }));

  const reset = () => setState(defaults);

  const changeFontSize = (delta: number) => {
    setState((prev) => ({
      ...prev,
      fontSize: Math.min(200, Math.max(80, prev.fontSize + delta)),
    }));
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-[9999] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
        aria-label={open ? 'Close accessibility menu' : 'Open accessibility menu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Accessibility size={24} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 left-6 z-[9999] w-80 max-h-[80vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
          role="dialog"
          aria-modal="false"
          aria-label="Accessibility Settings"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif text-lg text-foreground font-medium">Accessibility</h2>
            <button
              onClick={reset}
              className="text-xs font-sans text-muted-foreground hover:text-foreground transition-colors cursor-pointer underline"
              aria-label="Reset accessibility settings"
            >
              Reset
            </button>
          </div>

          {/* Font size */}
          <div className="mb-4">
            <p className="font-sans text-sm text-foreground mb-2 flex items-center gap-2">
              <Type size={16} />
              Text Size ({state.fontSize}%)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => changeFontSize(-10)}
                className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer font-sans text-sm"
                aria-label="Decrease text size"
              >
                <Minus size={14} />
                Decrease
              </button>
              <button
                onClick={() => changeFontSize(10)}
                className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer font-sans text-sm"
                aria-label="Increase text size"
              >
                <Plus size={14} />
                Increase
              </button>
            </div>
          </div>

          {/* Toggle buttons */}
          <div className="space-y-2">
            <ToggleButton
              active={state.highContrast}
              onClick={() => update({ highContrast: !state.highContrast })}
              icon={<Eye size={16} />}
              label="High Contrast"
            />
            <ToggleButton
              active={state.invertColors}
              onClick={() => update({ invertColors: !state.invertColors })}
              icon={<Palette size={16} />}
              label="Invert Colors"
            />
            <ToggleButton
              active={state.grayscale}
              onClick={() => update({ grayscale: !state.grayscale })}
              icon={<Scaling size={16} />}
              label="Grayscale"
            />
            <ToggleButton
              active={state.highlightLinks}
              onClick={() => update({ highlightLinks: !state.highlightLinks })}
              icon={<Link2 size={16} />}
              label="Highlight Links"
            />
            <ToggleButton
              active={state.textSpacing}
              onClick={() => update({ textSpacing: !state.textSpacing })}
              icon={<AlignCenter size={16} />}
              label="Text Spacing"
            />
            <ToggleButton
              active={state.readableFont}
              onClick={() => update({ readableFont: !state.readableFont })}
              icon={<LetterText size={16} />}
              label="Readable Font"
            />
            <ToggleButton
              active={state.bigCursor}
              onClick={() => update({ bigCursor: !state.bigCursor })}
              icon={<MousePointer size={16} />}
              label="Large Cursor"
            />
            <ToggleButton
              active={state.stopAnimations}
              onClick={() => update({ stopAnimations: !state.stopAnimations })}
              icon={<MonitorOff size={16} />}
              label="Stop Animations"
            />
          </div>

          {/* Accessibility statement */}
          <div className="mt-5 pt-4 border-t border-border">
            <p className="font-sans text-xs text-muted-foreground text-center">
              This website complies with WCAG 2.1 AA standards and the Israeli Equal Rights for Persons with Disabilities Regulations.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const ToggleButton = ({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg border transition-colors cursor-pointer font-sans text-sm ${
      active
        ? 'bg-primary text-primary-foreground border-primary'
        : 'bg-background text-foreground border-border hover:bg-muted'
    }`}
    role="switch"
    aria-checked={active}
    aria-label={label}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default AccessibilityWidget;
