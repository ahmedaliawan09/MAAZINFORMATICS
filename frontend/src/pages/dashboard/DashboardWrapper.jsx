import { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import DashboardPage from "./dashboard";
import {
    encodeDashboardPath,
    validateDashboardToken,
    decodeDashboardSection,
    isCleanDashboardUrl,
    isObfuscatedDashboardUrl
} from "../../utils/urlObfuscator";

/**
 * Wrapper component that handles URL obfuscation for dashboard
 * - Redirects /dashboard-maaz to obfuscated URL
 * - Validates obfuscated URLs
 * - Maintains obfuscation throughout session
 */
export default function DashboardWrapper() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        const pathname = location.pathname;

        // If accessing clean URL, redirect to obfuscated version
        if (isCleanDashboardUrl(pathname)) {
            const obfuscatedPath = encodeDashboardPath('overview');
            navigate(obfuscatedPath, { replace: true });
            return;
        }

        // If accessing obfuscated URL, validate token
        if (isObfuscatedDashboardUrl(pathname)) {
            const token = params.token;
            
            // If no token in sessionStorage, this might be a direct access
            // Generate new token and redirect
            if (!validateDashboardToken(token)) {
                const newObfuscatedPath = encodeDashboardPath('overview');
                navigate(newObfuscatedPath, { replace: true });
            }
        }
    }, [location.pathname, navigate, params.token]);

    // Render the actual dashboard
    return <DashboardPage />;
}
