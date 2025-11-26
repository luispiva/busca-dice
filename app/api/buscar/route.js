export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const numero = searchParams.get("n");

  if (!numero) {
    return Response.json({ error: "Número não informado" }, { status: 400 });
  }

  // URL do arquivo
  const url =
    "https://raw.githubusercontent.com/thoughtworks/dadoware/refs/heads/master/7776palavras-numeradas-2e.txt";

  // Baixa o arquivo
  const texto = await fetch(url).then((r) => r.text());

  // Cada linha está como: 1111 palavra
  const linhas = texto.split("\n");

  // Procura a linha que começa com o número
  const linha = linhas.find((l) => l.startsWith(numero + " "));

  if (!linha) {
    return Response.json({ palavra: null });
  }

  const palavra = linha.split(" ").slice(1).join(" ").trim();

  return Response.json({ palavra });
}
