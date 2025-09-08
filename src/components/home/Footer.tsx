export default function Footer() {
  return (
    <footer className="border-t border-[--color-card-border] py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Bruce Chen. All rights reserved. <br />
      <a
        href="mailto:your-email@example.com"
        className="text-blue-600 underline"
      >
        Contact Me
      </a>
    </footer>
  );
}
