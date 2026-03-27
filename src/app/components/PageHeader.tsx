"use client";

import { useEffect, useState } from "react";

function isWebView() {
  const ua = navigator.userAgent;

  // iOS webview: has AppleWebKit but not Safari
  if (/AppleWebKit/.test(ua) && !/Safari/.test(ua)) return true;

  // Android webview: contains "wv" flag
  if (/\bwv\b/.test(ua)) return true;

  return false;
}

export default function PageHeader({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!isWebView());
  }, []);

  if (!visible) return null;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: {lastUpdated}</p>
    </>
  );
}
