export async function GET(req: Request) {
  "https://william.wow.wrtn.ai/chat/v3/65d0c9890ca398d54e772da7/start?platform=web&user=jaxtyn@wrtn.io&model=gpt3.5";

  const res = await fetch("https://api2.dev.wrtn.club/gateway/auth/refresh", {
    method: "GET",
    headers: {},
  });

  const data = await res.json();
  return data;
}
