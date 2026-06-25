import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { logger } from "../utils/logger";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        logger(
          "frontend",
          "info",
          "notifications",
          "Fetching notifications"
        );

        const data = await fetchNotifications();

        setNotifications(data.notifications || []);

        logger(
          "frontend",
          "info",
          "notifications",
          "Notifications loaded successfully"
        );
      } catch (err) {
        setError(err.message);

        logger(
          "frontend",
          "error",
          "notifications",
          err.message
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return {
    notifications,
    totalPages: 1,
    loading,
    error,
  };
}