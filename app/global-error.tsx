"use client";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#003be2",
          color: "#f5f5f6",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: 24,
        }}
      >
        <title>Something went wrong | ByteSpace</title>
        <div>
          <h1 style={{ fontSize: 40, margin: "0 0 12px" }}>
            Something went wrong
          </h1>
          <p style={{ margin: "0 0 24px", color: "#e5e6e8" }}>
            Please try again in a moment.
          </p>
          {error.digest && (
            <p style={{ fontSize: 12, color: "#ced0d3" }}>
              Error reference: {error.digest}
            </p>
          )}
          <button
            onClick={() => retry()}
            style={{
              background: "#d4fb20",
              color: "#242528",
              border: 0,
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
