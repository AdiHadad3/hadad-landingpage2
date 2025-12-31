import { useState, useEffect, useCallback } from 'react';
import { Accessibility, X, ZoomIn, ZoomOut, Moon, Eye, Link2, Pause, RotateCcw, Type, MousePointer, AlignJustify, Underline, Focus, Keyboard, Volume2, BookOpen, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  stopAnimations: boolean;
  bigCursor: boolean;
  readableFont: boolean;
  textSpacing: boolean;
  underlineLinks: boolean;
  focusHighlight: boolean;
  keyboardNav: boolean;
  screenReader: boolean;
  dyslexiaFont: boolean;
  hideImages: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  stopAnimations: false,
  bigCursor: false,
  readableFont: false,
  textSpacing: false,
  underlineLinks: false,
  focusHighlight: false,
  keyboardNav: false,
  screenReader: false,
  dyslexiaFont: false,
  hideImages: false,
};

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const html = document.documentElement;
    const body = document.body;

    // Font size
    html.style.fontSize = `${newSettings.fontSize}%`;

    // High contrast
    body.classList.toggle('high-contrast', newSettings.highContrast);

    // Grayscale
    body.classList.toggle('grayscale-mode', newSettings.grayscale);

    // Highlight links
    body.classList.toggle('highlight-links', newSettings.highlightLinks);

    // Stop animations
    body.classList.toggle('stop-animations', newSettings.stopAnimations);

    // Big cursor
    body.classList.toggle('big-cursor', newSettings.bigCursor);

    // Readable font
    body.classList.toggle('readable-font', newSettings.readableFont);

    // Text spacing
    body.classList.toggle('text-spacing', newSettings.textSpacing);

    // Underline links
    body.classList.toggle('underline-links', newSettings.underlineLinks);

    // Focus highlight
    body.classList.toggle('focus-highlight', newSettings.focusHighlight);

    // Keyboard navigation
    body.classList.toggle('keyboard-nav', newSettings.keyboardNav);

    // Screen reader mode
    body.classList.toggle('screen-reader-mode', newSettings.screenReader);

    // Dyslexia-friendly font
    body.classList.toggle('dyslexia-font', newSettings.dyslexiaFont);

    // Hide images
    body.classList.toggle('hide-images', newSettings.hideImages);

    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const increaseFontSize = () => {
    if (settings.fontSize < 200) {
      updateSetting('fontSize', settings.fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 80) {
      updateSetting('fontSize', settings.fontSize - 10);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
        aria-label={isOpen ? 'Close accessibility menu' : 'Open accessibility menu'}
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        {isOpen ? <X size={24} /> : <Accessibility size={24} />}
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            id="accessibility-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility Settings"
            onKeyDown={handleKeyDown}
            className="fixed bottom-24 left-6 z-50 w-80 max-h-[80vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl animate-scale-in"
          >
            {/* Header */}
            <div className="sticky top-0 bg-primary text-primary-foreground p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Accessibility size={20} />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close accessibility menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Font Size - WCAG 1.4.4 */}
              <div className="bg-muted/50 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Type size={18} />
                    Text Size (up to 200%)
                  </span>
                  <span className="text-sm text-muted-foreground">{settings.fontSize}%</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 80}
                    className="flex-1 cursor-pointer"
                    aria-label="Decrease text size"
                  >
                    <ZoomOut size={16} className="mr-1" />
                    Smaller
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 200}
                    className="flex-1 cursor-pointer"
                    aria-label="Increase text size"
                  >
                    <ZoomIn size={16} className="mr-1" />
                    Larger
                  </Button>
                </div>
              </div>

              {/* Visual Options */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-1">Visual Adjustments</p>
                
                <ToggleOption
                  icon={<Moon size={18} />}
                  label="High Contrast"
                  description="WCAG 1.4.3 - Increase color contrast"
                  checked={settings.highContrast}
                  onChange={(v) => updateSetting('highContrast', v)}
                />

                <ToggleOption
                  icon={<Eye size={18} />}
                  label="Grayscale"
                  description="Display in black and white"
                  checked={settings.grayscale}
                  onChange={(v) => updateSetting('grayscale', v)}
                />

                <ToggleOption
                  icon={<Link2 size={18} />}
                  label="Highlight Links"
                  description="Make all links more visible"
                  checked={settings.highlightLinks}
                  onChange={(v) => updateSetting('highlightLinks', v)}
                />

                <ToggleOption
                  icon={<Underline size={18} />}
                  label="Underline Links"
                  description="WCAG 1.4.1 - Underline all links"
                  checked={settings.underlineLinks}
                  onChange={(v) => updateSetting('underlineLinks', v)}
                />

                <ToggleOption
                  icon={<Pause size={18} />}
                  label="Stop Animations"
                  description="WCAG 2.2.2 - Pause all motion"
                  checked={settings.stopAnimations}
                  onChange={(v) => updateSetting('stopAnimations', v)}
                />

                <ToggleOption
                  icon={<SkipForward size={18} />}
                  label="Hide Images"
                  description="Hide decorative images"
                  checked={settings.hideImages}
                  onChange={(v) => updateSetting('hideImages', v)}
                />
              </div>

              {/* Navigation Options */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-1">Navigation & Focus</p>
                
                <ToggleOption
                  icon={<MousePointer size={18} />}
                  label="Large Cursor"
                  description="Enlarge the mouse pointer"
                  checked={settings.bigCursor}
                  onChange={(v) => updateSetting('bigCursor', v)}
                />

                <ToggleOption
                  icon={<Focus size={18} />}
                  label="Focus Highlight"
                  description="WCAG 2.4.7 - Enhanced focus indicators"
                  checked={settings.focusHighlight}
                  onChange={(v) => updateSetting('focusHighlight', v)}
                />

                <ToggleOption
                  icon={<Keyboard size={18} />}
                  label="Keyboard Navigation"
                  description="WCAG 2.1.1 - Show keyboard shortcuts"
                  checked={settings.keyboardNav}
                  onChange={(v) => updateSetting('keyboardNav', v)}
                />
              </div>

              {/* Reading Options */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-1">Reading & Content</p>
                
                <ToggleOption
                  icon={<Type size={18} />}
                  label="Readable Font"
                  description="Use a more accessible font"
                  checked={settings.readableFont}
                  onChange={(v) => updateSetting('readableFont', v)}
                />

                <ToggleOption
                  icon={<BookOpen size={18} />}
                  label="Dyslexia-Friendly"
                  description="Use OpenDyslexic-style font"
                  checked={settings.dyslexiaFont}
                  onChange={(v) => updateSetting('dyslexiaFont', v)}
                />

                <ToggleOption
                  icon={<AlignJustify size={18} />}
                  label="Text Spacing"
                  description="WCAG 1.4.12 - Increase spacing"
                  checked={settings.textSpacing}
                  onChange={(v) => updateSetting('textSpacing', v)}
                />

                <ToggleOption
                  icon={<Volume2 size={18} />}
                  label="Screen Reader Mode"
                  description="Optimize for screen readers"
                  checked={settings.screenReader}
                  onChange={(v) => updateSetting('screenReader', v)}
                />
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                className="w-full mt-4 cursor-pointer"
                onClick={resetSettings}
                aria-label="Reset all accessibility settings"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset All Settings
              </Button>

              {/* Accessibility Statement */}
              <div className="text-xs text-center text-muted-foreground pt-2 space-y-1">
                <p className="font-medium">WCAG 2.0 AA Compliant</p>
                <p>
                  Accessibility inquiries:{' '}
                  <a 
                    href="mailto:hadadpetals@gmail.com" 
                    className="underline hover:text-primary"
                  >
                    hadadpetals@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

interface ToggleOptionProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleOption = ({ icon, label, description, checked, onChange }: ToggleOptionProps) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left cursor-pointer ${
        checked 
          ? 'bg-primary/10 border-2 border-primary' 
          : 'bg-muted/50 border-2 border-transparent hover:bg-muted'
      }`}
    >
      <div className={`p-2 rounded-lg ${checked ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/20 text-foreground'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
      <div
        className={`w-10 h-6 rounded-full transition-colors duration-200 relative ${
          checked ? 'bg-primary' : 'bg-muted-foreground/30'
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? 'right-1' : 'left-1'
          }`}
        />
      </div>
    </button>
  );
};

export default AccessibilityWidget;
