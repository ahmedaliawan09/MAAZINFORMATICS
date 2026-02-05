// URL Obfuscation utility for dashboard security

/**
 * Generates a secure, obfuscated URL token
 * @returns {string} Obfuscated token
 */
export const generateObfuscatedToken = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 15);
    const random2 = Math.random().toString(36).substring(2, 15);
    
    // Create a complex token that looks random
    const token = btoa(`${random}${timestamp}${random2}`)
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    
    return token;
};

/**
 * Encodes the dashboard path to an obfuscated URL
 * @param {string} section - Current dashboard section
 * @returns {string} Obfuscated path
 */
export const encodeDashboardPath = (section = 'overview') => {
    const token = generateObfuscatedToken();
    const sectionEncoded = btoa(section).replace(/=/g, '');
    
    // Store the token in sessionStorage for validation
    sessionStorage.setItem('dashboard_token', token);
    sessionStorage.setItem('dashboard_section', section);
    
    return `/d/${token}/${sectionEncoded}`;
};

/**
 * Validates if the current obfuscated URL is valid
 * @param {string} token - Token from URL
 * @returns {boolean} Is valid
 */
export const validateDashboardToken = (token) => {
    const storedToken = sessionStorage.getItem('dashboard_token');
    return storedToken === token;
};

/**
 * Decodes the section from obfuscated URL
 * @param {string} encodedSection - Encoded section from URL
 * @returns {string} Decoded section name
 */
export const decodeDashboardSection = (encodedSection) => {
    try {
        const section = sessionStorage.getItem('dashboard_section');
        if (section) return section;
        
        // Fallback: try to decode from URL
        return atob(encodedSection);
    } catch {
        return 'overview';
    }
};

/**
 * Clears dashboard tokens (on logout)
 */
export const clearDashboardTokens = () => {
    sessionStorage.removeItem('dashboard_token');
    sessionStorage.removeItem('dashboard_section');
};

/**
 * Checks if user is accessing the clean dashboard URL
 * @param {string} pathname - Current pathname
 * @returns {boolean} Is clean URL
 */
export const isCleanDashboardUrl = (pathname) => {
    return pathname === '/dashboard-maaz' || pathname.startsWith('/dashboard-maaz/');
};

/**
 * Checks if user is accessing the obfuscated dashboard URL
 * @param {string} pathname - Current pathname
 * @returns {boolean} Is obfuscated URL
 */
export const isObfuscatedDashboardUrl = (pathname) => {
    return pathname.startsWith('/d/');
};
