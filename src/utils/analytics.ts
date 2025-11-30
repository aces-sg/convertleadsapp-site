/**
 * Google Analytics 4 Event Tracking Utilities
 *
 * These functions push events to GTM's dataLayer, which forwards them to GA4.
 * Events will appear in GA4's Engagement reports.
 *
 * NAMING CONVENTION: Use page-prefixed element IDs as event_label values.
 * Format: {page}-{element-id}
 *
 * Examples:
 * - home-hero-cta-desktop
 * - about-contact-form
 * - services-3d-bim-modelling
 *
 * Benefits:
 * - Easy cross-page comparison in GA4
 * - Filter all interactions from a specific page
 * - Clear context for each event
 * - Scalable across entire site
 *
 * Example:
 * <button id="home-cta-get-started" onClick={() => trackClick('cta_click', {
 *   event_label: 'home-cta-get-started'  // Same as the element ID
 * })}>
 */

declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface ClickEventParams {
  event_category: string;
  event_label: string;
  value?: number;
  [key: string]: any;
}

/**
 * Track a click event in GA4
 *
 * @param eventName - Name of the event (e.g., 'button_click', 'service_card_click')
 * @param params - Event parameters including event_label for the click description
 *
 * @example
 * trackClickEvent('button_click', {
 *   event_category: 'navigation',
 *   event_label: 'Learn More - 3D BIM Modelling'
 * });
 */
export const trackClickEvent = (
  eventName: string,
  params: ClickEventParams
): void => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });

    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GA4 Event:', eventName, params);
    }
  }
};

/**
 * Track service card clicks
 */
export const trackServiceClick = (
  serviceTitle: string,
  serviceUrl: string,
  category: '2D' | '3D' | 'Convert' | 'Professional Services'
): void => {
  trackClickEvent('service_card_click', {
    event_category: 'services',
    event_label: `${category} - ${serviceTitle}`,
    service_name: serviceTitle,
    service_url: serviceUrl,
    service_category: category,
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (
  buttonLabel: string,
  location: string,
  destinationUrl?: string
): void => {
  trackClickEvent('cta_click', {
    event_category: 'cta',
    event_label: `${buttonLabel} - ${location}`,
    button_text: buttonLabel,
    page_location: location,
    destination_url: destinationUrl,
  });
};

/**
 * Track navigation clicks
 */
export const trackNavigationClick = (
  linkLabel: string,
  linkUrl: string,
  navSection: 'header' | 'footer' | 'sidebar'
): void => {
  trackClickEvent('navigation_click', {
    event_category: 'navigation',
    event_label: `${navSection} - ${linkLabel}`,
    link_text: linkLabel,
    link_url: linkUrl,
    nav_section: navSection,
  });
};

/**
 * Track form interactions
 */
export const trackFormInteraction = (
  formName: string,
  action: 'start' | 'submit' | 'error',
  fieldName?: string
): void => {
  trackClickEvent('form_interaction', {
    event_category: 'forms',
    event_label: `${formName} - ${action}`,
    form_name: formName,
    form_action: action,
    field_name: fieldName,
  });
};

/**
 * Track calculator usage
 */
export const trackCalculatorUse = (
  calculatorType: string,
  action: string
): void => {
  trackClickEvent('calculator_interaction', {
    event_category: 'tools',
    event_label: `${calculatorType} - ${action}`,
    calculator_type: calculatorType,
  });
};
