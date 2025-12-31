import { useState, useEffect, useCallback } from 'react';
import { Accessibility, X, ZoomIn, ZoomOut, Moon, Eye, Link2, Pause, RotateCcw, Type, MousePointer, Volume2 } from 'lucide-react';
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
    if (newSettings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Grayscale
    if (newSettings.grayscale) {
      body.classList.add('grayscale-mode');
    } else {
      body.classList.remove('grayscale-mode');
    }

    // Highlight links
    if (newSettings.highlightLinks) {
      body.classList.add('highlight-links');
    } else {
      body.classList.remove('highlight-links');
    }

    // Stop animations
    if (newSettings.stopAnimations) {
      body.classList.add('stop-animations');
    } else {
      body.classList.remove('stop-animations');
    }

    // Big cursor
    if (newSettings.bigCursor) {
      body.classList.add('big-cursor');
    } else {
      body.classList.remove('big-cursor');
    }

    // Readable font
    if (newSettings.readableFont) {
      body.classList.add('readable-font');
    } else {
      body.classList.remove('readable-font');
    }

    // Text spacing
    if (newSettings.textSpacing) {
      body.classList.add('text-spacing');
    } else {
      body.classList.remove('text-spacing');
    }

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
    if (settings.fontSize < 150) {
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
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={isOpen ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
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
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            id="accessibility-menu"
            role="dialog"
            aria-modal="true"
            aria-label="תפריט נגישות"
            onKeyDown={handleKeyDown}
            className="fixed bottom-24 left-6 z-50 w-80 max-h-[70vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl animate-scale-in"
          >
            {/* Header */}
            <div className="sticky top-0 bg-primary text-primary-foreground p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Accessibility size={20} />
                  הגדרות נגישות
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
                  aria-label="סגור תפריט נגישות"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Font Size */}
              <div className="bg-muted/50 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Type size={18} />
                    גודל טקסט
                  </span>
                  <span className="text-sm text-muted-foreground">{settings.fontSize}%</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 80}
                    className="flex-1"
                    aria-label="הקטן גודל טקסט"
                  >
                    <ZoomOut size={16} className="ml-1" />
                    הקטן
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 150}
                    className="flex-1"
                    aria-label="הגדל גודל טקסט"
                  >
                    <ZoomIn size={16} className="ml-1" />
                    הגדל
                  </Button>
                </div>
              </div>

              {/* Toggle Options */}
              <div className="space-y-2">
                <ToggleOption
                  icon={<Moon size={18} />}
                  label="ניגודיות גבוהה"
                  description="הגברת הניגודיות בין צבעים"
                  checked={settings.highContrast}
                  onChange={(v) => updateSetting('highContrast', v)}
                />

                <ToggleOption
                  icon={<Eye size={18} />}
                  label="גווני אפור"
                  description="הצגת האתר בשחור-לבן"
                  checked={settings.grayscale}
                  onChange={(v) => updateSetting('grayscale', v)}
                />

                <ToggleOption
                  icon={<Link2 size={18} />}
                  label="הדגשת קישורים"
                  description="הדגשת כל הקישורים באתר"
                  checked={settings.highlightLinks}
                  onChange={(v) => updateSetting('highlightLinks', v)}
                />

                <ToggleOption
                  icon={<Pause size={18} />}
                  label="עצירת אנימציות"
                  description="עצירת כל האנימציות והתנועה"
                  checked={settings.stopAnimations}
                  onChange={(v) => updateSetting('stopAnimations', v)}
                />

                <ToggleOption
                  icon={<MousePointer size={18} />}
                  label="סמן גדול"
                  description="הגדלת סמן העכבר"
                  checked={settings.bigCursor}
                  onChange={(v) => updateSetting('bigCursor', v)}
                />

                <ToggleOption
                  icon={<Type size={18} />}
                  label="גופן קריא"
                  description="שימוש בגופן נגיש וקריא יותר"
                  checked={settings.readableFont}
                  onChange={(v) => updateSetting('readableFont', v)}
                />

                <ToggleOption
                  icon={<Volume2 size={18} />}
                  label="ריווח טקסט"
                  description="הגדלת הריווח בין שורות ומילים"
                  checked={settings.textSpacing}
                  onChange={(v) => updateSetting('textSpacing', v)}
                />
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={resetSettings}
                aria-label="איפוס כל הגדרות הנגישות"
              >
                <RotateCcw size={16} className="ml-2" />
                איפוס הגדרות
              </Button>

              {/* Accessibility Statement Link */}
              <p className="text-xs text-center text-muted-foreground pt-2">
                לבירורים בנושא נגישות:{' '}
                <a 
                  href="mailto:hadadpetals@gmail.com" 
                  className="underline hover:text-primary"
                >
                  hadadpetals@gmail.com
                </a>
              </p>
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
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-right ${
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
