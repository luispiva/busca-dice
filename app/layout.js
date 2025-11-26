export const metadata = {
  title: "Busca Diceware",
  description: "Busca palavra pelo número",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "sans-serif", padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
