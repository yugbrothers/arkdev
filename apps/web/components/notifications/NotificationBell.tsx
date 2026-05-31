export default function NotificationBell() {
  return (
    <a
      href="/notifications"
      className="relative"
    >
      🔔

      <span
        className="
        absolute
        -top-2
        -right-2
        text-xs
        px-2
        rounded-full
        border
        "
      >
        4
      </span>
    </a>
  );
}
