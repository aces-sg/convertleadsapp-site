import { useCallback } from 'react';
import {
  trackClickEvent,
  trackServiceClick,
  trackCTAClick,
  trackNavigationClick,
  trackFormInteraction,
  trackCalculatorUse,
} from '../utils/analytics';

/**
 * React hook for GA4 event tracking
 *
 * @example
 * const { trackClick, trackService } = useAnalytics();
 *
 * <button onClick={() => trackClick('button_click', {
 *   event_category: 'engagement',
 *   event_label: 'Download Brochure'
 * })}>
 *   Download
 * </button>
 */
export const useAnalytics = () => {
  const trackClick = useCallback(
    (eventName: string, params: any) => {
      trackClickEvent(eventName, params);
    },
    []
  );

  const trackService = useCallback(
    (
      serviceTitle: string,
      serviceUrl: string,
      category: '2D' | '3D' | 'Convert' | 'Professional Services'
    ) => {
      trackServiceClick(serviceTitle, serviceUrl, category);
    },
    []
  );

  const trackCTA = useCallback(
    (buttonLabel: string, location: string, destinationUrl?: string) => {
      trackCTAClick(buttonLabel, location, destinationUrl);
    },
    []
  );

  const trackNavigation = useCallback(
    (
      linkLabel: string,
      linkUrl: string,
      navSection: 'header' | 'footer' | 'sidebar'
    ) => {
      trackNavigationClick(linkLabel, linkUrl, navSection);
    },
    []
  );

  const trackForm = useCallback(
    (
      formName: string,
      action: 'start' | 'submit' | 'error',
      fieldName?: string
    ) => {
      trackFormInteraction(formName, action, fieldName);
    },
    []
  );

  const trackCalculator = useCallback(
    (calculatorType: string, action: string) => {
      trackCalculatorUse(calculatorType, action);
    },
    []
  );

  return {
    trackClick,
    trackService,
    trackCTA,
    trackNavigation,
    trackForm,
    trackCalculator,
  };
};
